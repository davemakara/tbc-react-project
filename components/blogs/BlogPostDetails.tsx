import Image from "next/image";
import Link from "next/link";

interface Recipe {
  blogData: {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    rating: number;
    image: string;
  };
}

const BlogPostDetails = ({ blogData }: Recipe) => {
  return (
    <Link href={`blog/${blogData.id}`}>
      <div className="p-4 max-w-[350px] bg-white dark:bg-[#eee] rounded-lg overflow-hidden transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-[#000] hover:mt-[-8px]">
        <span className="relative block w-full h-[200px] rounded-lg overflow-hidden">
          <Image src={blogData.image} alt={blogData.name} fill />
        </span>

        <div className="relative flex flex-col p-3">
          <h1 className="h-[60px] md:h-[70px] text-[#000] text-[18px] md:text-[20px] font-bold">
            {blogData.name}
          </h1>
          <p className="h-[70px] overflow-hidden text-[14px] text-[#000] mb-4">
            {blogData.ingredients.join(", ")}
          </p>

          <span className="w-full flex justify-between">
            <p className="py-2 text-[16px] text-[#000] font-semibold">
              ⭐ {blogData.rating}
            </p>
            <p className="px-3 py-2 border-none rounded text-[16px] text-[#696687] cursor-pointer hover:bg-green">
              See more..
            </p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostDetails;
