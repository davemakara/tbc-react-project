import BlogPosts from "../../../../components/blogs/BlogPosts";

import tapeBG from "../../../../public/marshallBG.jpg";

const BlogPage = () => {
  return (
    <section
      style={{ backgroundImage: `url(${tapeBG.src})` }}
      className="w-full min-h-screen pt-36 lg:pt-40 bg-cover bg-fixed bg-no-repeat"
    >
      <BlogPosts />;
    </section>
  );
};

export default BlogPage;
