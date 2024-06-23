import { getBlogs } from "@/app/api";
import BlogPosts from "../../../../components/blogs/BlogPosts";

const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <section className="w-full min-h-screen py-36">
      <BlogPosts blogs={blogs} />
    </section>
  );
};

export default BlogPage;
