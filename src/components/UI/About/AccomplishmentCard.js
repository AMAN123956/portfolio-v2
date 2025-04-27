import React from 'react'
import styles from './AccomplishmentCard.module.css'
import data from '../../Collection/Accomplishment'
function AccomplishmentCard() {
    return (
        <div className={styles.accBox}>
            {data.map(item =>
                <div className={styles.accomplishmentcard}>
                    <img className={styles.certificateImg} src={item} alt="certifivate_img" />
            </div>)}
         </div>
    )
}

export default AccomplishmentCard
