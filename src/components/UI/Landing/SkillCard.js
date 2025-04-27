import styles from './SkillCard.module.css'

function SkillCard(props) {
    return (
        <div className={styles.skillCard}>
            <img src="https://ianlunn.co.uk/static/0fe210187ee16bce95bb97c7ab3db41b/98c70/feature__web.webp"
                className={styles.skillCardImage}
                alt="skill_img" />
            <h2 className={styles.skillTitle}>{ props.skillTitle}</h2>
            <h4 className={styles.skillContent}>{ props.skillDesc}</h4>
        </div>
    )
}

export default SkillCard
