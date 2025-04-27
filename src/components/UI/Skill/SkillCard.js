import React from 'react'
import styles from './SkillCard.module.css'
import html from '../../../assets/img/html.jpg'
import { fdata, bdata } from '../../Collection/Skill'
function SkillCard(props) {
    return (
    <div className={styles.skillCardRow}>
            {
                props.type.map(item =>
                <div className={styles.skillCard}>
                <img src={item} className={styles.skillIcons}/>
                </div>)
        }
    </div>
    )
}

export default SkillCard
