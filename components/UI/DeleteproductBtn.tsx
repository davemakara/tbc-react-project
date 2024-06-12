"use client";

import { deleteSingleProductAction } from "@/app/actions";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  id: number;
}

const DeleteproductBtn = ({ id }: DeleteButtonProps) => {
  const route = useRouter();

  const handleDelete = async () => {
    try {
      await deleteSingleProductAction(id);
      route.push("/products");
    } catch (error) {
      console.error("Failed to delete product:", error);
      // You might want to show an error message to the user here
    }
  };
  return <button onClick={handleDelete}>DELETE</button>;
};

export default DeleteproductBtn;
