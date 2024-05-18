"use client";

import { addToCartAction } from "@/app/actions";
import { ProductsCart } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { MdOutlineShoppingCart } from "react-icons/md";

interface AddToCartBtnProps {
  id: number;
  productsCart: ProductsCart[];
}

const initialStatus = (id: number, products: ProductsCart[]) => {
  const productExist = products?.find((p) => p.product_id === id);
  return productExist ? true : false;
};

const AddToCartBtn = ({ id, productsCart }: AddToCartBtnProps) => {
  const router = useRouter();

  const [isInCart, setIsInCart] = useState(() =>
    initialStatus(id, productsCart)
  );

  const handleClick = () => {
    if (isInCart) return;

    addToCartAction(id);
    router.refresh();
    setIsInCart(true);
  };
  return (
    <>
      {!isInCart ? (
        <button
          onClick={handleClick}
          className="w-[80px] bg-darkYellow rounded-md flex justify-center items-center text-[14px]"
        >
          <MdOutlineShoppingCart className="mr-1 text-[20px]" />
          add
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="w-[80px] bg-red rounded-md flex justify-center items-center text-[14px]"
        >
          <MdOutlineShoppingCart className="mr-1 text-[20px]" />
          added
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
