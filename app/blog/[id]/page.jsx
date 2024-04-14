import { data } from "autoprefixer";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <div>
      <div>
        <Image src={post.image} alt={post.name} fill />
        <h2>{post.name}</h2>
        <p>{post.ingredients.join(", ")}</p>
        <Link href="/blog">
          <button>{"<"} Back to Blogs</button>
        </Link>
      </div>
    </div>
  );
}

export default Post;
