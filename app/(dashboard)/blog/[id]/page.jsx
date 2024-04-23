import Link from "next/link";
import Image from "next/image";

export const generateStaticParams = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();

  return data.recipes.map((recipe) => ({
    id: recipe.id.toString(),
  }));
};

const getPost = async (id) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await res.json();
  return data;
};

async function Post({ params }) {
  const post = await getPost(params.id);

  return (
    <section className="w-full min-h-screen bg-mainLightBG dark:bg-mainDarkBG pt-[10rem] pb-[6rem] flex flex-col items-center">
      <div>
        <span className="relative">
          <Image src={post.image} alt={post.name} width={300} height={150} />
        </span>

        <h2 className="text-[30px] font-semibold mt-[30px]">{post.name}</h2>
        <p className="text-[16px] mt-[15px]">{post.ingredients.join(", ")}</p>
        <Link href="/blog">
          <button className="bg-darkYellow text-white text-[18px] mt-[30px] border-none rounded px-2 py-1">
            {"<"} Back to Blogs
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Post;
