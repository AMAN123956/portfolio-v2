import styles from './Blog.module.css'
import BlogCard from '../UI/Landing/BlogCard'
import data from '../Collection/Blog'
function Blog() {
    return (
        <div className={styles.blogContainer}>
            <h2 className={styles.heading1}>Featured Blogs</h2>
            <div className={styles.blogBox}>
                {data.map(item =>
                    <BlogCard title={item.title}
                    desc={item.desc}
                    imgurl={item.imgurl}
                    />
                )}
            </div>
            
        </div>
    )
}

export default Blog
