import styles from './WorkCard.module.css'

export default function WorkCard(props) {
    return (
        <div className={styles.workCard}>
            {/* Card Left Section */}
            <div className={styles.leftSection}>
                {/*Top Name Section */}
              <div className={styles.leftTopSection}>
                    <h2 className={styles.leftTitle}>
                        {props.title}
                    </h2>
                </div>
                {/*Bottom Info Section */}
                <div className={styles.leftBottomSection}>
                    <a href={props.liveUrl} target="_blank" rel="noreferrer"
                        className={styles.liveBtn}>{props.title}
                    </a>
                    <p className={styles.shortInfo}>
                        {props.desc}
                    </p>
                </div>
            </div>
            {/* Card Right Section */}
            <div className={styles.rightSection}>
                <img className={styles.rightImg} alt="project_img"
                    src={props.imgurl} />
            </div>
        </div>
    )
}
