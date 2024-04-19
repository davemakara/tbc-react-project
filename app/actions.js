"use server";

import { cookies } from "next/headers";

import { AUTH_COOKIE_KEY } from "../constants";
import { redirect } from "next/navigation";

export const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const products = await response.json();

    return products;
  } catch {
    return [];
  }
};

export const fetchBlogRecipes = async () => {
  try {
    const response = await fetch("https://dummyjson.com/recipes", {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const blogs = await response.json();

    return blogs;
  } catch {
    return [];
  }
};

export const login = async (username, password) => {
  "use server";
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const user = await response.json();

  const cookieStore = cookies();

  cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));

  console.log(user);
};

export const logout = async () => {
  cookies().delete(AUTH_COOKIE_KEY);
  redirect("/login");
};
