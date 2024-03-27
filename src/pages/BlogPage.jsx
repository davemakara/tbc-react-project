import { blogPosts } from "../assets/store/store";

const BlogPage = () => {
  return (
    <section className="blog-page-wrapper">
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div className="blog-box" key={post.id}>
            <span>
              <img src={post.image} alt={post.title} className="blog-img" />
            </span>
            <h1>{post.title}</h1>
            <h4>{post.description}</h4>
            <button className="see-more-btn">See More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
