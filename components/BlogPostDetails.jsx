import Image from "next/image";
import Link from "next/link";

import styles from "./BlogPostDetails.module.css";

const BlogPostDetails = ({ blogData }) => {
  return (
    <div className={styles["blog-box"]}>
      <span>
        <Image src={blogData.image} alt={blogData.name} fill />
      </span>
      <h1>{blogData.name}</h1>
      <h4>{blogData.ingredients.join(", ")}</h4>
      <Link href={`blog/${blogData.id}`}>
        <button className={styles["see-more-btn"]}>See More</button>
      </Link>
    </div>
  );
};

export default BlogPostDetails;
