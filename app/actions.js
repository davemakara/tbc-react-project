"use server";

export const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const products = await response.json();
  return products;
};

export const fetchBlogRecipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  const blogs = await response.json();
  return blogs;
};
