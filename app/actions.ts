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

export async function getUserCartAction(id: string) {
  const response = await fetch(BASE_URL + `/api/cart/get-cart/${id}`, {
    cache: "no-store",
  });

  revalidatePath("/");
  const carts = await response.json();

  const cart = carts.carts.rows;

  return cart;
}

export async function quantityChangeAction(
  product_id: any,
  auth_id: any,
  action: any
) {
  try {
    const response = await fetch(BASE_URL + "/api/cart/quantity-change", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id, auth_id, action }),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Quantity updated:", result);
      // Update your state or UI based on the result
    } else {
      console.error("Error updating quantity:", result.message);
    }
  } catch (error) {
    console.error("Error updating quantity:", error);
  }
}

export const handleQuantityChange = async (
  product_id: string,
  auth_id: string,
  action: "increment" | "decrement"
) => {
  try {
    const response = await fetch(BASE_URL + "/api/cart/quantity-change", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id, auth_id, action }),
    });

    revalidatePath("/");
    const result = await response.json();

    if (response.ok) {
    } else {
      console.error("Error updating quantity:", result.message);
    }
  } catch (error) {
    console.error("Error updating quantity:", error);
  }
};

export async function resetCartAction(id: string) {
  return await fetch(`${BASE_URL}/api/cart/reset-cart/${id}`, {
    method: "DELETE",
  });
}
