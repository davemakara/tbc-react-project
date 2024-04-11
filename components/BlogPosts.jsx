"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

const BlogPosts = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/recipes");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setBlogsData(data.recipes.slice(0, 20));
      console.log(data.recipes);
    };

    fetchData();
  }, []);

  return (
    <div className="blog-container">
      {blogsData.map((blog) => (
        <div className="blog-box" key={blog.id}>
          <span>
            <Image src={blog.image} alt={blog.name} fill />
          </span>
          <h1>{blog.name}</h1>
          <h4>{blog.ingredients.join(", ")}</h4>
          <button className="see-more-btn">See More</button>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
