import BlogPosts from "../../components/BlogPosts";
import Layout from "../../components/Layout";

const BlogPage = () => {
  return (
    <Layout>
      <section className="blog-page-wrapper">
        <BlogPosts />
      </section>
    </Layout>
  );
};

export default BlogPage;
