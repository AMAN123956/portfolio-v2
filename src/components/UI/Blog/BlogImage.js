import React from 'react';
import styles from './BlogImage.module.css';

const BlogImage = ({ title, desc, category, size = 'normal' }) => {
    const getGradientByCategory = (category) => {
        const gradients = {
            'JavaScript': 'linear-gradient(135deg, #F0DB4F 0%, #323330 100%)',
            'React': 'linear-gradient(135deg, #61DAFB 0%, #282C34 100%)',
            'CSS': 'linear-gradient(135deg, #264DE4 0%, #2965F1 100%)',
            'default': 'linear-gradient(135deg, #1B9EFC 0%, #00ff88 100%)'
        };
        return gradients[category] || gradients.default;
    };

    return (
        <div 
            className={`${styles.blogImage} ${styles[size]}`}
            style={{ 
                background: getGradientByCategory(category)
            }}
        >
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <span className={styles.category}>{category}</span>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogImage; 