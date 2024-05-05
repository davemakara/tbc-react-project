import Link from "next/link";
import Image from "next/image";

import { setStaticParamsLocale } from "next-international/server";

// import { Recipe } from "../../../../../types/types";

// export const generateStaticParams = async () => {
//   const res = await fetch("https://dummyjson.com/recipes");
//   const data = await res.json();

//   return data.recipes.map((recipe: Recipe) => ({
//     id: recipe.id.toString(),
//   }));
// };

const getPost = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await res.json();
  return data;
};

interface PageParams {
  params: {
    id: string;
    locale: string;
  };
}

async function Post({ params }: PageParams) {
  const post = await getPost(params.id);
  setStaticParamsLocale(params.locale);
  console.log(post);

  return (
    <section className="w-full min-h-screen bg-[#ddd] dark:bg-mainDarkBG2 py-[5rem] xxl:pt-[10rem] flex flex-col items-center">
      <div className="w-4/5 flex flex-col items-center lg:flex-row gap-5 lg:gap-10 xl:gap-20">
        <div className="w-full h-[200px] sm:h-[300px] md:w-2/3 lg:w-1/2 lg:h-[300px] xxl:h-[400px] relative rounded-lg overflow-hidden">
          <Image src={post.image} alt={post.name} fill />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 px-2">
          <h2 className="text-[30px] font-semibold py-3 lg:py-0 lg:pb-3">
            {post.name}
          </h2>
          <div className="flex gap-3 text-[14px] py-3">
            <p className="bg-green px-2 py-1 rounded-md">{post.mealType[0]}</p>
          </div>
          <p className="py-3">Ingredients: {post.ingredients.join(", ")}</p>
          <ul className="list-disc py-3">
            {post.instructions.map((recipe: string) => (
              <li key={recipe}>{recipe}</li>
            ))}
          </ul>
          <div className="flex justify-between">
            {/* <p>⭐ {post.rating}</p> */}
            <p>Calories: {post.caloriesPerServing}</p>
            <p>Cook Time: {post.cookTimeMinutes}m</p>
            <p>{post.difficulty}</p>
          </div>
          <Link href="/blog">
            <button className="bg-red text-white text-[16px] mt-[30px] border-none rounded px-2 py-1">
              {"<"} Back to Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Post;
