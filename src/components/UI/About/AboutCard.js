import React from 'react'
import styles from './AboutCard.module.css'

function AboutCard(props) {
    return (
        <div>
            <div className={styles.pskill}>
                <img className={styles.icon} src={props.iconurl} />
                <p className={styles.iconname}>{ props.skilltitle}</p>
            </div>
        </div>
    )
}

export default AboutCard
