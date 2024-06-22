"use client";

import BlogPostDetails from "./BlogPostDetails";
import { BlogProps } from "@/types/types";

interface Blogs {
  blogs: BlogProps[];
}

const BlogPosts = ({ blogs }: Blogs) => {
  return (
    <>
      <div className="w-full pt-[2rem] px-12 sm:px-16">
        <div className="gap-5 md:gap-7 xxl:gap-10">
          {blogs.map((blog: BlogProps) => (
            <BlogPostDetails blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
