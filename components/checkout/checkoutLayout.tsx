"use client";

import { handleQuantityChange } from "@/app/actions";
// import { resetCartAction } from "@/app/api";
import { FC } from "react";

export const dynamic = "force-dynamic";

interface Product {
  map(
    arg0: (product: Product, index: number) => import("react").JSX.Element
  ): import("react").ReactNode;
  product_id: string;
  auth_id: string;
  quantity: number;
}

interface iProducts {
  products: Product[];
}

const CheckoutLayout: FC<iProducts> = ({ products }) => {
  if (products.length <= 0) {
    return <h1>Cart Is Empty!</h1>;
  }
  //   const userId = products[0]?.auth_id;

  return (
    <section className="w-full min-h-screen flex justify-center items-center flex-col bg-[#ddd] dark:bg-mainDarkBG2">
      {products.map((product: Product, index: number) => (
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

      {/* {userId && <button onClick={() => resetCartAction(userId)}>RESET</button>} */}
    </section>
  );
};

export default CheckoutLayout;
