import BlogPosts from "../../../components/BlogPosts";

const BlogPage = () => {
  return (
    <section className="bg-mainLightBG dark:bg-mainDarkBG w-full min-h-screen block pt-[8rem] md:px-[2rem] md:pb-[4rem]">
      <BlogPosts />;
    </section>
  );
};

export default BlogPage;
