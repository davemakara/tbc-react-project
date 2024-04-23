import BlogPostDetails from "./BlogPostDetails";

import { fetchBlogRecipes } from "../app/actions";

const BlogPosts = async () => {
  const data = await fetchBlogRecipes();

  return (
    <section className="bg-mainLightBG dark:bg-mainDarkBG w-full min-h-screen py-[2rem]">
      <h1 className="pt-[1rem] pl-[3rem] text-[#000] font-semibold text-[30px] md:py-[2rem] px-16">
        Blog Posts
      </h1>
      <div className="w-full block pt-[2rem] pl-12 pr-12 sm:flex flex-col items-center px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-5">
          {data.recipes.map((recipe) => (
            <BlogPostDetails blogData={recipe} key={recipe.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
