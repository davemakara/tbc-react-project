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
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setCartProducts(selectedProducts);
  }, []);

  useEffect(() => {
    if (selectedProducts.length === 0) return setIsEmpty(true);
  }, [selectedProducts]);

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

  const handleDelete = (id: number) => {
    const updatedProduct = cartProducts.filter((product) => {
      return product.id !== id;
    });
    setCartProducts(updatedProduct);
    deleteCartItemAction(id);
  };

  const handleReset = () => {
    setCartProducts([]);
    resetCartAction();
  };

  return (
    <div
      className={`w-full p-10 flex flex-col items-center ${
        isEmpty && "h-[300px] md:h-[600px] justify-center"
      }`}
    >
      {!isEmpty ? (
        <>
          <button
            onClick={handleReset}
            className="p-2 rounded-lg bg-green3 my-6 md:my-10"
          >
            Reset
          </button>
          <div className="w-full flex flex-col items-center">
            {cartProducts.map((product) => (
              <CartItem
                key={product.id}
                cartItem={product}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
              />
            ))}
          </div>{" "}
        </>
      ) : (
        <h1 className="text-4xl bold">Cart is empty</h1>
      )}
    </div>
  );
};

export default CartList;
