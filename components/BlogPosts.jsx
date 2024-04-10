"use client";

import Image from "next/image";

import { blogPosts } from "./store";

const BlogPosts = () => {
  return (
    <div className="blog-container">
      {blogPosts.map((post) => (
        <div className="blog-box" key={post.id}>
          <span>
            <Image src={post.image} alt={post.image} fill />
          </span>
          <h1>{post.title}</h1>
          <h4>{post.description}</h4>
          <button className="see-more-btn">See More</button>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
