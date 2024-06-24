import Link from "next/link";
import Image from "next/image";

import { getBlogDetail } from "@/app/api";
import DeleteBlogBtn from "@/components/UI/DeleteBlogBtn";

import { FaCalendarAlt } from "react-icons/fa";

interface PageParams {
  params: {
    id: number;
    locale: string;
  };
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const BlogDetail = async ({ params }: PageParams) => {
  const blog = await getBlogDetail(params.id);

  const formattedDate = formatDate(blog.createdat);

  return (
    <section className="w-full min-h-screen py-36 lg:pt-40 flex flex-col items-center bg-[#eee] dark:bg-mainDarkBG bg-opacity-70 dark:bg-opacity-70">
      <div className="w-4/5 flex flex-col items-center lg:flex-row lg:items-start gap-5 lg:gap-10">
        <div className="w-full h-[200px] sm:h-[300px] md:w-2/3 lg:w-1/2 lg:h-[300px] xxl:h-[400px] relative rounded-lg overflow-hidden">
          <Image src={blog.photo} alt={blog.title} fill />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 p-5 rounded-lg">
          <h2 className="text-[30px] font-semibold py-3 lg:py-0 lg:pb-3">
            {blog.title}
          </h2>
          <div className="text-[14px] py-10">
            <p className="font-semibold">{blog.description}</p>
          </div>

          <div>
            <p className="py-3">{blog.paragraph1}</p>
            <p className="py-3">{blog.paragraph2}</p>
            <p className="py-3">{blog.paragraph3}</p>
          </div>
          <p className="my-8 flex gap-1 items-center">
            <FaCalendarAlt /> {formattedDate}
          </p>
          <div className="w-full flex justify-between">
            <Link href="/blog">
              <button className="bg-[#E64848] text-white text-[14px] mt-[30px] px-3 sm:px-4 py-3">
                {"<"} Back to Blogs
              </button>
            </Link>
            <DeleteBlogBtn id={Number(params.id)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
