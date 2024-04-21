import Image from "next/image";
import Link from "next/link";

const BlogPostDetails = ({ blogData }) => {
  return (
    <div className="max-w-[450px] pb-[20px] bg-white rounded overflow-hidden transition-all duration-300 ease hover:shadow-[#000] hover:shadow-md">
      <span className="block relative w-full h-[200px]">
        <Image src={blogData.image} alt={blogData.name} fill />
      </span>
      <h1 className="text-[1.5rem] py-[10px] px-[15px]">{blogData.name}</h1>
      <h4 className="text-[1rem] py-[10px] px-[15px] font-thin">
        {blogData.ingredients.join(", ")}
      </h4>
      <Link href={`blog/${blogData.id}`}>
        <button className="bg-green text-white text-[14px] border-none rounded py-[8px] px-[10px] mt-[10px] ml-[15px] transition duration-200 ease cursor-pointer hover:bg-red">
          See More
        </button>
      </Link>
    </div>
  );
};

export default BlogPostDetails;
