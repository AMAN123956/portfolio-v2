import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/UI/Landing/BlogCard';
import blogData from '../components/Collection/Blog';
import '../styles/Blogs.css';

const Blogs = () => {
  return (
    <motion.div
      className="blogs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="blogs-hero">
        <motion.div
          className="blogs-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1>My Blog</h1>
          <p>Thoughts, learnings, and insights about web development</p>
        </motion.div>
      </section>

      <section className="blogs-grid">
        {blogData.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * (index + 1) }}
          >
            <BlogCard {...post} />
          </motion.article>
        ))}
      </section>
    </motion.div>
  );
};

export default Blogs; 