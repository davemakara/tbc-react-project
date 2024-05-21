"use client";

import { useI18n } from "../../locales/client";

import BlogPostDetails from "./BlogPostDetails";

// import { fetchBlogRecipes } from "../../app/actions";
import { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  rating: number;
  image: string;
}

// interface RecipesProps {
//   recipes: Recipe[];
// }

const BlogPosts = () => {
  const [data, setData] = useState([]);
  const t = useI18n();

  useEffect(() => {
    const fetchBlogRecipes = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const blogs = await response.json();
      setData(blogs.recipes);
    };

    fetchBlogRecipes();
    // const blogData: RecipesProps = await fetchBlogRecipes();
  }, []);

  return (
    <section className="w-full min-h-screen pt-36 lg:pt-40">
      <h1 className="text-center text-[#000] dark:text-[#f4f4f4] font-bold text-[24px] md:text-[30px] mb-8">
        {t("chooseRecipe")}
      </h1>
      <div className="w-full pt-[2rem] px-12 flex flex-col items-center sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7 xxl:gap-10">
          {data.map((recipe: Recipe) => (
            <BlogPostDetails blogData={recipe} key={recipe.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
