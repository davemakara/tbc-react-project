"use client";

import { FC, useEffect, useState } from "react";

import Image from "next/image";
import { getProductDetail } from "@/app/api";
import { handleQuantityChange, resetCartAction } from "@/app/actions";
import LoadingScreen from "../loading/LoadingScreen";

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
    return <LoadingScreen />;
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
    <section className="min-h-[500px] bg-mainLightBG dark:bg-mainDarkBG bg-opacity-90 dark:bg-opacity-90 p-5 rounded-lg sm:flex sm:flex-col">
      <button
        className="mt-8 mx-auto w-20 h-10 bg-green text-white rounded"
        onClick={() => resetCartAction(products[0]?.auth_id)}
      >
        RESET
      </button>
      <div className="w-full sm:flex sm:flex-wrap sm:justify-center gap-3 my-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] bg-[#fff] dark:bg-cardsDarkBG rounded-lg shadow-md p-4 mb-3 sm:mb-0 flex flex-col items-center text-[#000] dark:text-white"
          >
            <Image
              src={product.photo}
              width={200}
              height={200}
              alt={product.title}
              className="rounded-lg"
            />

            <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
            <p>${product.price}</p>
            <div className="flex items-center mt-2">
              <span className="text-gray-600 dark:text-gray-400 mr-2">
                Quantity: {product.quantity}
              </span>
              <button
                className="w-5 h-5 mx-2 text-[#000] dark:text-white rounded-full bg-red flex items-center justify-center"
                onClick={() =>
                  handleQuantityChange(product.id, product.auth_id, "decrement")
                }
              >
                -
              </button>
              <button
                className="w-5 h-5 mx-2 text-[#000] dark:text-white rounded-full bg-green flex items-center justify-center"
                onClick={() =>
                  handleQuantityChange(product.id, product.auth_id, "increment")
                }
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white text-[#000] w-2/3 sm:w-[300px] h-[200px] my-4 p-4 mx-auto rounded-lg flex flex-col justify-between">
        <div className="h-1/2 flex flex-col justify-around">
          <p className="text-md font-semibold">
            Total Price: ${totalPrice.toFixed(2)}
          </p>
          <p className="text-md font-semibold">
            Total Quantity: {totalQuantity}
          </p>
        </div>
        <button className="text-lg px-4 py-3 bg-green rounded-lg font-semibold">
          BUY NOW
        </button>
      </div>
    </section>
  );
};

export default CheckoutLayout;
