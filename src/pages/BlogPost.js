import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Markdown from 'markdown-to-jsx';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import BlogImage from '../components/UI/Blog/BlogImage';
import '../styles/BlogPost.css';

const blogPosts = {
  'mastering-asynchronous-javascript': {
    title: 'Mastering Asynchronous JavaScript: A Comprehensive Guide',
    desc: 'Learn everything about asynchronous programming in JavaScript, from callbacks to Promises and async/await.',
    date: 'March 20, 2024',
    readTime: '10 min read',
    category: 'JavaScript',
    content: `
# Mastering Asynchronous JavaScript: A Comprehensive Guide

## Introduction
Asynchronous programming is a fundamental concept in JavaScript that allows us to handle operations that take time to complete without blocking the main thread. This guide will take you through the evolution of asynchronous programming in JavaScript, from callbacks to modern async/await syntax.

## Understanding Asynchronous Programming
JavaScript is single-threaded, meaning it can only execute one piece of code at a time. However, many operations in web development are inherently asynchronous:
- Network requests
- File operations
- Timers
- User interactions

## The Evolution of Asynchronous JavaScript

### 1. Callbacks
The traditional way of handling asynchronous operations in JavaScript.

\`\`\`javascript
function fetchData(callback) {
    setTimeout(() => {
        callback('Data received!');
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});
\`\`\`

**Pros:**
- Simple to understand
- Works in all JavaScript environments

**Cons:**
- Callback hell
- Error handling is difficult
- Code becomes hard to maintain

### 2. Promises
Introduced in ES6, Promises provide a cleaner way to handle asynchronous operations.

\`\`\`javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data received!');
        }, 1000);
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
\`\`\`

**Pros:**
- Better error handling
- Chainable operations
- More readable code
- Built-in error propagation

### 3. Async/Await
The modern way to write asynchronous code, making it look synchronous.

\`\`\`javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
\`\`\`

**Pros:**
- Cleaner, more readable code
- Better error handling with try/catch
- Easier to debug
- More intuitive flow

## Best Practices

1. **Error Handling**
   - Always use try/catch with async/await
   - Handle promise rejections
   - Implement proper error boundaries

2. **Performance Optimization**
   - Use Promise.all for parallel operations
   - Implement proper loading states
   - Consider using Web Workers for heavy computations

3. **Code Organization**
   - Keep async functions focused and small
   - Use meaningful variable names
   - Document complex async flows

## Common Patterns

### Parallel Execution
\`\`\`javascript
async function fetchMultipleData() {
    const [users, posts, comments] = await Promise.all([
        fetch('/api/users'),
        fetch('/api/posts'),
        fetch('/api/comments')
    ]);
}
\`\`\`

### Sequential Execution
\`\`\`javascript
async function processSequentially() {
    const result1 = await step1();
    const result2 = await step2(result1);
    const result3 = await step3(result2);
}
\`\`\`

## Conclusion
Understanding asynchronous programming is crucial for modern JavaScript development. By mastering these concepts, you'll be able to write more efficient, maintainable, and scalable applications.

## Resources
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript.info](https://javascript.info/async)
- [You Don't Know JS: Async & Performance](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed/async%20%26%20performance)
    `
  },
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
};

const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace('lang-', '') : 'javascript';
  
  return (
    <pre className={`language-${language}`}>
      <code className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug];

  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

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
        <span className="blog-post-category">{post.category}</span>
      </div>

      <motion.article
        className="blog-post-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Markdown
          options={{
            overrides: {
              code: {
                component: CodeBlock
              },
              a: {
                props: {
                  target: '_blank',
                  rel: 'noopener noreferrer'
                }
              }
            }
          }}
        >
          {post.content}
        </Markdown>
      </motion.article>

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