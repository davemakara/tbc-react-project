"use client";

import { useEffect, useState } from "react";
import { getUserCartAction } from "@/app/actions";
import { useUser } from "@auth0/nextjs-auth0/client";

export const dynamic = "force-dynamic";

interface Product {
  product_id: string;
  auth_id: string;
  quantity: number;
}

const CheckoutPage = () => {
  const { user, isLoading } = useUser();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (user) {
      const fetchProducts = async () => {
        const id = user.sub;

        if (id) {
          const fetchedProducts = await getUserCartAction(id);
          setProducts(fetchedProducts);
        }
      };

      fetchProducts();
    }
  }, [user]);

  const handleQuantityChange = async (
    product_id: string,
    auth_id: string,
    action: "increment" | "decrement"
  ) => {
    try {
      const response = await fetch("/api/cart/quantity-change", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product_id, auth_id, action }),
      });

      const result = await response.json();

      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.product_id === product_id
              ? { ...product, quantity: result.updatedQuantity }
              : product
          )
        );
      } else {
        console.error("Error updating quantity:", result.message);
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full min-h-screen flex justify-center items-center flex-col bg-[#ddd] dark:bg-mainDarkBG2">
      {products.map((product, index) => (
        <div key={index} className="m-2">
          <h1>
            Product id: {product.product_id} - quantity: {product.quantity}{" "}
            <button
              className="p-2 mx-2 bg-red"
              onClick={() =>
                handleQuantityChange(
                  product.product_id,
                  product.auth_id,
                  "decrement"
                )
              }
            >
              -
            </button>
            <button
              className="p-2 mx-2 bg-green"
              onClick={() =>
                handleQuantityChange(
                  product.product_id,
                  product.auth_id,
                  "increment"
                )
              }
            >
              +
            </button>
          </h1>
        </div>
      ))}
    </section>
  );
};

export default CheckoutPage;
