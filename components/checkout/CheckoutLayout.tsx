"use client";

import { FC, useEffect, useState } from "react";

import Image from "next/image";
import { getProductDetail } from "@/app/api";
import { handleQuantityChange, resetCartAction } from "@/app/actions";

export const dynamic = "force-dynamic";

interface Product {
  product_id: string;
  auth_id: string;
  quantity: number;
  title: string;
  photo: string;
  id: string;
  price: number; // Assuming price is a number
}

interface iProducts {
  products: Product[];
}

const CheckoutLayout: FC<iProducts> = ({ products: initialProducts }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await Promise.all(
          initialProducts.map(async (product) => {
            // Fetch product details including auth_id and product_id
            const productDetail = await getProductDetail(
              Number(product.product_id)
            );
            return {
              ...productDetail,
              auth_id: product.auth_id,
              quantity: product.quantity,
            };
          })
        );
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [initialProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const totalQuantity = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  const totalPrice = products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  return (
    <section className="w-full min-h-screen flex justify-center items-center  bg-red-500 dark:bg-gray-800 p-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-darkYellow rounded-lg shadow-md p-4 m-2 flex flex-col items-center"
        >
          <Image
            src={product.photo}
            width={200}
            height={200}
            alt={product.title}
            className="rounded-lg"
          />
          <p>${product.price}</p>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4">
            {product.title}
          </h2>
          <div className="flex items-center mt-2">
            <span className="text-gray-600 dark:text-gray-400 mr-2">
              Quantity: {product.quantity}
            </span>
            <button
              className="p-2 mx-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() =>
                handleQuantityChange(product.id, product.auth_id, "decrement")
              }
            >
              -
            </button>
            <button
              className="p-2 mx-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={() =>
                handleQuantityChange(product.id, product.auth_id, "increment")
              }
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div>
        <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
        <h1>Total Quantity: {totalQuantity}</h1>
      </div>
      <button
        className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => resetCartAction(products[0]?.auth_id)}
      >
        RESET
      </button>

      <button className="p-4 bg-green">BUY NOW</button>
    </section>
  );
};

export default CheckoutLayout;
