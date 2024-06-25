import { getBlogs } from "@/app/api";
import { BlogProps } from "@/types/types";

const AllBlogs = async () => {
  const blogs = await getBlogs();

  return (
    <div className="w-11/12 mx-auto my-20">
      <p className="text-[#000] dark:text-white text-4xl font-semibold text-center mb-8">
        Blogs
      </p>
      <table className="w-full">
        <th className="w-full h-20 flex justify-between bg-red border-b border-b-white">
          <td className="w-[100px] h-20 flex justify-center items-center">
            id
          </td>
          <td className="w-[350px] h-20 flex justify-center items-center">
            Title
          </td>
          <td className="w-[350px] h-20 flex justify-center items-center">
            Description
          </td>
          <td className="w-[350px] h-20 flex justify-center items-center">
            Photo
          </td>
        </th>
        {blogs?.map((blog: BlogProps) => (
          <tr
            key={blog.id}
            className="w-full flex justify-between border-b border-b-white"
          >
            <td className="w-[100px] h-32 flex justify-center items-center">
              {blog.id}
            </td>
            <td className="w-[350px] h-32 flex justify-center items-center">
              {blog.title}
            </td>
            <td className="w-[350px] h-32 flex justify-center items-center">
              {blog.description}
            </td>
            <td className="w-[350px] h-32 flex justify-center items-center">
              {blog.photo}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AllBlogs;
