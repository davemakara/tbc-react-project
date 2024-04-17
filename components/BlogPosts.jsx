import styles from "./BlogPosts.module.css";

import BlogPostDetails from "./BlogPostDetails";

import { fetchBlogRecipes } from "../app/actions";

const BlogPosts = async () => {
  const data = await fetchBlogRecipes();

  return (
    <section className={styles["blog-page-wrapper"]}>
      <div className={styles["blog-container"]}>
        {data.recipes.map((recipe) => (
          <BlogPostDetails blogData={recipe} key={recipe.id} />
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
