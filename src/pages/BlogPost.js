import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogImage from '../components/UI/Blog/BlogImage';
import '../styles/BlogPost.css';

const blogPosts = {
  'understanding-javascript-promises': {
    title: 'Understanding JavaScript Promises',
    desc: 'A deep dive into JavaScript Promises, async/await, and handling asynchronous operations effectively.',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'JavaScript',
    image: '/blog-images/promises.jpg',
    content: `
      <h2>Introduction to Promises</h2>
      <p>JavaScript Promises are a powerful way to handle asynchronous operations. They represent a value that may not be available immediately but will be resolved at some point in the future.</p>

      <h2>Basic Promise Syntax</h2>
      <pre><code>
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation here
  if (/* operation successful */) {
    resolve(result);
  } else {
    reject(error);
  }
});
      </code></pre>

      <h2>Using Promises</h2>
      <p>Promises can be consumed using the .then() and .catch() methods:</p>
      <pre><code>
myPromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
      </code></pre>

      <h2>Async/Await</h2>
      <p>Modern JavaScript provides the async/await syntax for working with promises:</p>
      <pre><code>
async function getData() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
      </code></pre>

      <h2>Promise Chaining</h2>
      <p>Promises can be chained to handle sequential asynchronous operations:</p>
      <pre><code>
fetchUserData()
  .then(user => fetchUserPosts(user.id))
  .then(posts => displayPosts(posts))
  .catch(error => handleError(error));
      </code></pre>
    `
  },
  'modern-react-best-practices': {
    title: 'Modern React Best Practices',
    desc: 'Learn about the latest React patterns, hooks, and optimization techniques for building scalable applications.',
    date: 'March 10, 2024',
    readTime: '10 min read',
    category: 'React',
    content: `
      <h2>Introduction</h2>
      <p>As React continues to evolve, new patterns and best practices emerge that help us write better, more maintainable code.</p>

      <h2>Custom Hooks</h2>
      <p>Custom hooks allow you to extract component logic into reusable functions:</p>
      <pre><code>
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
      </code></pre>
    `
  },
  'css-grid-vs-flexbox': {
    title: 'CSS Grid vs Flexbox',
    desc: 'A comprehensive comparison between CSS Grid and Flexbox, and when to use each layout system.',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'CSS',
    content: `
      <h2>Introduction</h2>
      <p>CSS Grid and Flexbox are two powerful layout systems in CSS, each with their own strengths and use cases.</p>

      <h2>Flexbox</h2>
      <p>Flexbox is designed for one-dimensional layouts:</p>
      <pre><code>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
      </code></pre>

      <h2>Grid</h2>
      <p>CSS Grid is perfect for two-dimensional layouts:</p>
      <pre><code>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
      </code></pre>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="blog-post-error">
        <h1>Blog post not found</h1>
      </div>
    );
  }

  return (
    <motion.div
      className="blog-post"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="blog-post-header">
        <BlogImage 
          title={post.title}
          desc={post.desc}
          category={post.category}
          size="large"
        />
      </header>

      <div className="blog-post-meta">
        <span className="blog-post-date">{post.date}</span>
        <span className="blog-post-read-time">{post.readTime}</span>
      </div>

      <motion.article
        className="blog-post-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="blog-post-footer">
        <div className="blog-post-share">
          <h3>Share this post</h3>
          <div className="share-buttons">
            <button className="share-button twitter">
              <i className="fab fa-twitter"></i> Twitter
            </button>
            <button className="share-button linkedin">
              <i className="fab fa-linkedin"></i> LinkedIn
            </button>
            <button className="share-button facebook">
              <i className="fab fa-facebook"></i> Facebook
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost; 