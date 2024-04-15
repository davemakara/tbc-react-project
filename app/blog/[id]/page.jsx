import { data } from "autoprefixer";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../../components/Layout";

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
    <Layout>
      <section className="blog-post-container">
        <div>
          <span className="blog-post-img-wrapper">
            <Image src={post.image} alt={post.name} width={600} height={400} />
          </span>

          <h2>{post.name}</h2>
          <p>{post.ingredients.join(", ")}</p>
          <Link href="/blog">
            <button>{"<"} Back to Blogs</button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default Post;
