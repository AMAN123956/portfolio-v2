import styles from './Work.module.css'
import WorkCard from '../UI/Landing/WorkCard'
/* Data */
import data from '../Collection/Landing'
function Work() {
    return (
        <div className={styles.workContainer}>
            <h2 className={styles.workTitle}>
                Featured Work
            </h2>
            {data.map(item => (
                <WorkCard title={item.title}
                    imgurl={item.imgurl}
                    desc={item.desc}
                    liveUrl={item.liveurl}
                />
            ))}
            
           
        </div>
    )
}

export default Work
