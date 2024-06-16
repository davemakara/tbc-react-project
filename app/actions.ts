"use server";

import { revalidatePath } from "next/cache";
import { createUser, deleteSingleProduct, deleteUser, updateUser } from "./api";
import { BASE_URL } from "@/constants";

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);
  createUser(name as string, email as string, age as string);
  // revalidatePath("/admin");
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
  // revalidatePath("/admin");
}

export async function updateUserAction(formData: FormData) {
  const { id, name, email, age } = Object.fromEntries(formData);
  updateUser(id as string, name as string, email as string, age as string);
  // revalidatePath("/admin");
}

//STORE

export async function deleteSingleProductAction(id: number) {
  revalidatePath("/products");
  return await deleteSingleProduct(id);
}

// CART

export const addToCartAction = async (product_id: number, auth_id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/cart/add-to-cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id,
        auth_id: auth_id,
        quantity: 1,
      }),
    });
    revalidatePath("/");

    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }

    return response.json();
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};
