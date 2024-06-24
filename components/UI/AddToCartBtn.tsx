"use client";

import { addToCartAction } from "@/app/actions";
import { useUser } from "@auth0/nextjs-auth0/client";

import { useState, useEffect } from "react";

import { IoCart } from "react-icons/io5";

interface addToCartBtnProps {
  id: number;
}

const AddToCartBtn = ({ id }: addToCartBtnProps) => {
  const { user } = useUser();

  const [authId, setAuthId] = useState("");

  useEffect(() => {
    if (user && user.sub) {
      setAuthId(user.sub);
    }
  }, [user]);

  if (!user) {
    return (
      <a
        href="/api/auth/login"
        className="flex items-center justify-center text-sm gap-1 bg-red w-28 h-10 rounded-lg"
      >
        <IoCart className="text-lg" />
        Add to cart
      </a>
    );
  }

  return (
    <button
      onClick={() => addToCartAction(Number(id), authId)}
      className="flex items-center justify-center text-sm gap-1 bg-red w-28 h-10 rounded-lg"
    >
      <IoCart className="text-lg" />
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
