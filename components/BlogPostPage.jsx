import Link from "next/link";
import Image from "next/image";

import styles from "./BlogPostPage.module.css";

const BlogPostPage = ({ post }) => {
  return (
    <section className={styles["blog-post-container"]}>
      <div>
        <span className={styles["blog-post-img-wrapper"]}>
          <Image src={post.image} alt={post.name} width={600} height={400} />
        </span>

        <h2>{post.name}</h2>
        <p>{post.ingredients.join(", ")}</p>
        <Link href="/blog">
          <button>{"<"} Back to Blogs</button>
        </Link>
      </div>
    </section>
  );
};

export default BlogPostPage;
