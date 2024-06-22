import { getBlogs } from "@/app/api";
import BlogPosts from "../../../../components/blogs/BlogPosts";

const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <section className="w-full min-h-screen pt-36 lg:pt-40">
      <BlogPosts blogs={blogs} />
    </section>
  );
};

export default BlogPage;
