"use server";

import { revalidatePath } from "next/cache";
import {
  createUser,
  deleteSingleBlog,
  deleteSingleEvent,
  deleteSingleProduct,
  deleteUser,
  updateUser,
} from "./api";
import { BASE_URL } from "@/constants";
import { redirect } from "next/navigation";

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

// interface DetailProductData {
//   title: string;
//   description: string;
//   stock: number;
//   price: number;
//   photo: string;
//   category: string;
//   artist: string;
// }

// export async function createNewProduct(formData: DetailProductData) {
//   const { title, description, stock, price, photo, category, artist } =
//     formData;
//   addNewProduct(title, description, stock, price, photo, category, artist);
//   revalidatePath("/products");
// }

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
  await fetch(BASE_URL + `/api/cart/reset-cart/${id}`, {
    method: "DELETE",
    cache: "no-store",
  });
  revalidatePath("/cart");
}

// export async function resetCartAction(sub: string) {
//   await fetch(BASE_URL + "/api/cart/reset-cart/", {
//     method: "DELETE",
//     body: JSON.stringify({ sub }),
//   });
//   revalidatePath("/cart");
// }

// BLOGS

export async function addBlogPostAction(formData: any) {
  try {
    const response = await fetch(BASE_URL + "/api/blogs/add-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      revalidatePath("/blogs");
      return await response.json();
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("Submission failed");
  }
}

export async function deleteSingleBlogAction(id: number) {
  revalidatePath("/blog");
  return await deleteSingleBlog(id);
}

// EVENTS

export async function addEventAction(formData: any) {
  try {
    const response = await fetch(BASE_URL + "/api/events/add-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      revalidatePath("/events");
      return await response.json();
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("Submission failed");
  }
}

export async function deleteSingleEventAction(id: number) {
  revalidatePath("/events");
  return await deleteSingleEvent(id);
}

// CHECKOUT

// cart checkout route
export const cartCheckoutAction = async ({ products: products, user }: any) => {
  await fetch(`${BASE_URL}/api/checkout`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      products: products,
      user,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      if (response.url) {
        redirect(response.url);
      }
    });
};

export async function createRefund(charge: string) {
  revalidatePath("/orders");
  await fetch(BASE_URL + "/api/create-refund", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ charge }),
  });
}
