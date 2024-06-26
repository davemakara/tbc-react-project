import Image from "next/image";
import Link from "next/link";

import { FaRegCalendarAlt } from "react-icons/fa";

interface BlogDetails {
  blog: {
    id: number;
    title: string;
    description?: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    photo: string;
    createdat: string;
  };
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const BlogPostDetails = ({ blog }: BlogDetails) => {
  const formattedDate = formatDate(blog.createdat);

  return (
    <div className="w-full sm:w-[350px] md:w-full lg:w-4/5 xxl:w-2/3 md:flex bg-white dark:bg-[#1c1c1c] rounded-lg overflow-hidden transition-colors duration-200 ease-in-out hover:shadow-md hover:shadow-[#000]">
      <Link href={`blog/${blog.id}`}>
        <div className="relative w-full md:w-[260px] xxl:w-[350px] h-[250px] md:h-full">
          <Image src={blog.photo} alt={blog.title} fill />
        </div>
      </Link>

      <div className="w-full h-[250px] flex flex-col justify-between py-3 px-4">
        <p className="w-[94px] text-sm text-[#000] dark:text-white tracking-wide font-semibold py-1 border-b-4 border-b-[#000] dark:border-b-white">
          MUSIC NEWS
        </p>
        <Link href={`blog/${blog.id}`}>
          <h1 className="h-[120px] text-[#000] dark:text-white text-[18px] md:text-[20px] font-bold">
            {blog.title}
          </h1>
        </Link>

        <span className="w-full flex justify-between">
          <p className="text-[14px] text-[#000] dark:text-white flex items-center gap-1">
            <FaRegCalendarAlt />
            {formattedDate}
          </p>
          <Link href={`blog/${blog.id}`}>
            <p className="py-2 border-none rounded text-[14px] text-[#696687] dark:text-white cursor-pointer">
              See more..
            </p>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default BlogPostDetails;
