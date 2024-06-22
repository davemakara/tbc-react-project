"use client";

import { deleteSingleBlogAction } from "@/app/actions";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  id: number;
}

const DeleteBlogBtn = ({ id }: DeleteButtonProps) => {
  const route = useRouter();

  const handleDelete = async () => {
    try {
      await deleteSingleBlogAction(id);
      route.push("/blog");
    } catch (error) {
      console.error("Failed to delete product:", error);
      // You might want to show an error message to the user here
    }
  };
  return <button onClick={handleDelete}>DELETE</button>;
};

export default DeleteBlogBtn;
