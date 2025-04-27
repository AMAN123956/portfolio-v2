import React from 'react';
import styles from './BlogCard.module.css'
import { Link } from 'react-router-dom';
import BlogImage from '../Blog/BlogImage';

function BlogCard(props) {
    return (
        <Link to={`/blog/${props.slug}`} className={styles.blogCard}>
            <div className={styles.blogCardImage}>
                <BlogImage 
                    title={props.title}
                    desc={props.desc}
                    category={props.category}
                    size="normal"
                />
            </div>
            <div className={styles.blogCardContent}>
                <div className={styles.blogCardMeta}>
                    <span className={styles.blogDate}>{props.date}</span>
                    <span className={styles.blogReadTime}>{props.readTime}</span>
                </div>
                <h2 className={styles.blogCardTitle}>{props.title}</h2>
                <p className={styles.blogCardExcerpt}>{props.desc}</p>
                <span className={styles.readMore}>
                    Read More
                    <span className={styles.arrow}>→</span>
                </span>
            </div>
        </Link>
    )
}

export default BlogCard
