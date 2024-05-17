"use client";

import { CartItemProps } from "@/types/types";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { deleteCartItemAction, resetCartAction } from "@/app/actions";

const CartList = ({
  selectedProducts,
}: {
  selectedProducts: CartItemProps[];
}) => {
  const [cartProducts, setCartProducts] = useState<CartItemProps[] | []>([]);

  useEffect(() => {
    setCartProducts(selectedProducts);
  }, []);

  const handleIncrement = (id: number) => {
    const updatedProduct = cartProducts.map((product: CartItemProps) => {
      if (product.id === id) {
        return { ...product, count: product.count + 1 };
      } else {
        return product;
      }
    });
    setCartProducts(updatedProduct);
  };

  const handleDecrement = (id: number) => {
    const cartProductIndex = cartProducts.findIndex(
      (product) => product.id === id
    );

    if (cartProducts[cartProductIndex].count === 1) {
      const updatedProduct = cartProducts.filter((product) => {
        return product.id !== id;
      });
      setCartProducts(updatedProduct);
      deleteCartItemAction(id);
    } else {
      const updatedProduct = cartProducts.map((product: CartItemProps) => {
        if (product.id === id) {
          return { ...product, count: product.count - 1 };
        } else {
          return product;
        }
      });

      setCartProducts(updatedProduct);
    }
  };

  const handleReset = () => {
    setCartProducts([]);
    resetCartAction();
  };

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      {cartProducts.map((product) => (
        <CartItem
          key={product.id}
          cartItem={product}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      ))}
    </div>
  );
};

export default CartList;
