"use client";

import { addToCartAction } from "@/app/actions";
import { ProductsCart } from "@/types/types";
import { useState } from "react";

interface AddToCartBtnProps {
  id: number;
  productsCart: ProductsCart[];
}

const initialStatus = (id: number, products: ProductsCart[]) => {
  const productExist = products?.find((p) => p.product_id === id);
  return productExist ? true : false;
};

const AddToCartBtn = ({ id, productsCart }: AddToCartBtnProps) => {
  const [isInCart, setIsInCart] = useState(() =>
    initialStatus(id, productsCart)
  );

  const handleClick = () => {
    if (isInCart) {
      console.log("is exist");
    } else {
      addToCartAction(id);
      setIsInCart(true);
    }
  };
  return (
    <button onClick={handleClick}>
      {!isInCart ? "AddToCartBtn" : "In Cart"}
    </button>
  );
};

export default AddToCartBtn;
