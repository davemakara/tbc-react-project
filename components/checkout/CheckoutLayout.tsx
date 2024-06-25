"use client";

import { FC, useEffect, useState } from "react";

import Image from "next/image";
import { getProductDetail } from "@/app/api";
import {
  cartCheckoutAction,
  handleQuantityChange,
  resetCartAction,
} from "../../app/actions";
import LoadingScreen from "../loading/LoadingScreen";
import { useUser } from "@auth0/nextjs-auth0/client";

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
  const { user } = useUser();

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

  // const handleDeleteCartProducts = () => {
  //   // @ts-ignore
  //   resetCartAction(products[0]?.auth_id);
  // };

  // console.log(products[0]?.auth_id);

  const handleCheckout = async () => {
    try {
      await cartCheckoutAction({ products: products, user });
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (products.length === 0) {
    return (
      <h1 className="text-center text-4xl font-semibold mt-10 ">
        No Items Chosen!
      </h1>
    );
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
    <section className="min-h-[500px] p-5 rounded-lg sm:flex sm:flex-col">
      {user && (
        <button
          className="mb-8 mx-auto w-20 h-10 bg-red text-white rounded"
          onClick={() => resetCartAction(products[0]?.auth_id)}
        >
          RESET
        </button>
      )}

      <div className="w-full sm:flex sm:flex-wrap sm:justify-center gap-3 my-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full h-[400px] sm:w-[300px] bg-[#fff] dark:bg-cardsDarkBG rounded-lg shadow-md p-4 mb-3 sm:mb-0 flex flex-col items-center text-[#000] dark:text-white"
          >
            <Image
              src={product.photo}
              width={200}
              height={200}
              alt={product.title}
              className="rounded-lg w-[200px] h-[200px]"
            />
            <div className="h-[160px] w-[210px] flex flex-col justify-between">
              <h2 className="h-[60px] text-base font-semibold mt-4">
                {product.title}
              </h2>
              <p>Price: ${product.price}</p>
              <div className="flex items-center mt-2">
                <span className="mr-2">Quantity: {product.quantity}</span>
                <button
                  className="w-5 h-5 mx-2 text-[#000] bg-red dark:text-white border flex items-center justify-center"
                  onClick={() =>
                    handleQuantityChange(
                      product.id,
                      product.auth_id,
                      "decrement"
                    )
                  }
                >
                  -
                </button>
                <button
                  className="w-5 h-5 mx-2 text-[#000] bg-green dark:text-white border flex items-center justify-center"
                  onClick={() =>
                    handleQuantityChange(
                      product.id,
                      product.auth_id,
                      "increment"
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white text-[#000] w-2/3 sm:w-[300px] h-[240px] my-4 p-4 mx-auto rounded-lg flex flex-col justify-between">
        <div className="h-1/2 flex flex-col justify-around">
          <p className="text-md font-semibold">
            Total Price: ${totalPrice.toFixed(2)}
          </p>
          <p className="text-md font-semibold">
            Total Quantity: {totalQuantity}
          </p>
        </div>
        <button
          onClick={handleCheckout}
          className="text-lg px-4 py-3 bg-red rounded-lg font-semibold"
        >
          BUY NOW
        </button>
      </div>
    </section>
  );
};

export default CheckoutLayout;
