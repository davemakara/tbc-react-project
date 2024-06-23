"use client";

import { deleteSingleBlogAction } from "@/app/actions";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  id: number;
}

const DeleteBlogBtn = ({ id }: DeleteButtonProps) => {
  const { user } = useUser();
  const isAdmin = Array.isArray(user?.role)
    ? user?.role.includes("admin")
    : user?.role === "admin";

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

  if (!isAdmin) {
    return null;
  }

  return <button onClick={handleDelete}>DELETE</button>;
};

export default DeleteBlogBtn;
