import { motion } from "framer-motion";
import { blogPosts } from "../data/content";
import { reveal } from "../lib";

export default function Blog() {
  return (
    <section className="blog-section" id="blogs">
      <div className="blog-container">
        <span className="section-tag">• OUR BLOGS</span>
        <h2 className="section-title">Latest news & articles</h2>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <motion.article className="blog-card" key={post.title} {...reveal(i * 0.1)}>
              <header className="card-header">
                <div className="author-info">
                  <img src={post.avatar} alt={post.author} className="avatar" loading="lazy" />
                  <div>
                    <h4 className="author-name">{post.author}</h4>
                    <p className="author-role">Editor</p>
                  </div>
                </div>
                <div className="meta-info">
                  <span className="date">{post.date}</span>
                  <span className="category">{post.category}</span>
                </div>
              </header>
              <div className="card-image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <h3 className="card-title">
                <a href="#blogs">{post.title}</a>
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
