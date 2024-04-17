export const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products", {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const products = await response.json();

  return products;
};

export const fetchBlogRecipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes", {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const blogs = await response.json();

  return blogs;
};
