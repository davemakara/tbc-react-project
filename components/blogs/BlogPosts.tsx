"use client";

import { useState } from "react";
import BlogPostDetails from "./BlogPostDetails";
import { BlogProps } from "@/types/types";
import SearchBlog from "./SearchBlog";

interface Blogs {
  blogs: BlogProps[];
}

const BlogPosts = ({ blogs }: Blogs) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredBlogs = blogs.filter((blog: BlogProps) =>
    blog.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full pt-[2rem] px-12 sm:px-16">
      <SearchBlog onSearch={handleSearch} />
      <div className="flex flex-col sm:items-center gap-5 md:gap-7 xxl:gap-10">
        {filteredBlogs.map((blog: BlogProps) => (
          <BlogPostDetails blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
