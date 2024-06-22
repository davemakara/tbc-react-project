import Link from "next/link";
import Image from "next/image";

import { getBlogDetail } from "@/app/api";
import DeleteBlogBtn from "@/components/UI/DeleteBlogBtn";

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
    <section className="w-full min-h-screen pt-36 lg:pt-40 flex flex-col items-center">
      <div className="w-4/5 flex flex-col items-center gap-5 lg:gap-10 xl:gap-20">
        <div className="w-full h-[200px] sm:h-[300px] md:w-2/3 lg:w-1/2 lg:h-[300px] xxl:h-[400px] relative rounded-lg overflow-hidden">
          <Image src={blog.photo} alt={blog.title} fill />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 px-2">
          <h2 className="text-[30px] font-semibold py-3 lg:py-0 lg:pb-3">
            {blog.title}
          </h2>
          <div className="flex gap-3 text-[14px] py-3">
            <p className="font-semibold">{blog.description}</p>
          </div>

          <div>
            <p className="py-3">{blog.paragraph1}</p>
            <p className="py-3">{blog.paragraph2}</p>
            <p className="py-3">{blog.paragraph3}</p>
          </div>
          <p>Published: {formattedDate}</p>
          <div className="flex justify-between"></div>
          <Link href="/blog">
            <button className="bg-red text-white text-[16px] mt-[30px] border-none rounded px-2 py-1">
              {"<"} Back to Blogs
            </button>
          </Link>
          <DeleteBlogBtn id={Number(params.id)} />
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
