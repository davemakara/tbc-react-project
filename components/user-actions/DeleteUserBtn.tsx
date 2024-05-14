"use client";

import React from "react";

import { deleteUserAction } from "../../app/actions";
import { useRouter } from "next/navigation";

import { RiDeleteBin5Line } from "react-icons/ri";

const DeleteUserBtn = ({ id }: { id: number }) => {
  const router = useRouter();
  function handleClick() {
    deleteUserAction(id);
    router.refresh();
  }
  return (
    <RiDeleteBin5Line
      className="absolute right-0 w-5 h-5 cursor-pointer hover:text-red"
      onClick={() => handleClick()}
    />
  );
};

export default DeleteUserBtn;
