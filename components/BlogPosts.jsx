import BlogPostDetails from "./BlogPostDetails";

import { fetchBlogRecipes } from "../app/actions";

const BlogPosts = async () => {
  const data = await fetchBlogRecipes();

  return (
    <div className="grid gap-[30px] py-[1rem] px-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.recipes.map((recipe) => (
        <BlogPostDetails blogData={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default BlogPosts;
