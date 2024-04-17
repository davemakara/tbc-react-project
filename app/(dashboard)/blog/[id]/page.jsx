import { data } from "autoprefixer";

import BlogPostPage from "../../../../components/BlogPostPage";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  console.log(data);
  return data.recipes.map((recipe) => ({
    id: recipe.id.toString(),
  }));
}

async function getPost(id) {
  try {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

async function Post({ params }) {
  const post = await getPost(params.id);
  console.log(data);
  return <BlogPostPage post={post} />;
}

export default Post;
