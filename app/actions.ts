"use server";

import {
  addToCart,
  createUser,
  deleteCartItem,
  deleteUser,
  resetCart,
  updateCartCount,
  updateUser,
} from "./api";

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

export async function addToCartAction(id: number) {
  await addToCart(id);
}

export async function updateCartCountAction(id: number, count: number) {
  await updateCartCount(id, count);
}

export async function deleteCartItemAction(id: number) {
  await deleteCartItem(id);
}

export async function resetCartAction() {
  await resetCart();
}
