import Image from "next/image";
import Link from "next/link";

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

  console.log(blog.createdat);

  return (
    <Link href={`blog/${blog.id}`}>
      <div className="w-full sm:w-[350px] md:w-[600px] md:flex bg-white dark:bg-[#eee] rounded-lg overflow-hidden transition-colors duration-200 ease-in-out hover:shadow-md hover:shadow-[#000] hover:mt-[-8px]">
        <Image
          src={blog.photo}
          alt={blog.title}
          width={50}
          height={50}
          className="w-full md:w-[200px] max-h-[250px]"
        />

        <div className="relative flex flex-col py-2 px-4">
          <p className="w-[94px] text-sm tracking-wide font-semibold py-1 border-b-4 border-b-[#3774d7]">
            MUSIC NEWS
          </p>

          <h1 className="h-[60px] md:h-[70px] text-[#000] text-[18px] md:text-[20px] font-bold">
            {blog.title}
          </h1>

          <span className="w-full flex justify-between">
            <p className="py-2 text-[16px] text-[#000] font-semibold">
              {formattedDate}
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
