"use client";

import { useState, useEffect } from "react";

import { getBlogs } from "@/app/api";
import { BlogProps } from "@/types/types";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getBlogs();
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="w-11/12 mx-auto my-20">
      <p className="text-[#000] dark:text-white text-4xl font-semibold text-center mb-8">
        Blogs
      </p>
      <table className="w-full">
        <thead>
          <tr className="w-full h-20 flex justify-between bg-red border-b border-b-white">
            <th className="w-[100px] h-20 flex justify-center items-center">
              id
            </th>
            <th className="w-[350px] h-20 flex justify-center items-center">
              Title
            </th>
            <th className="w-[350px] h-20 flex justify-center items-center">
              Description
            </th>
            <th className="w-[350px] h-20 flex justify-center items-center">
              Photo
            </th>
          </tr>
        </thead>

        <tbody>
          {blogs.length !== 0 &&
            blogs.map((blog: BlogProps) => (
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
        </tbody>
      </table>
    </div>
  );
};

export default AllBlogs;
