import React from 'react'
import styles from './EducationCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCalendarCheck, faCalendarDay, faCalendarWeek, faCoffee } from '@fortawesome/free-solid-svg-icons'
function EducationCard(props) {
    const element = <FontAwesomeIcon icon={faCalendarAlt} />
    return (
        <div className={styles.educationcard}>
             
            <img style={{width:'120px'}} className={styles.jssimage} src="https://www.amandixit.me/img/e-2.jpg" alt="jss_img" />
            <h2 style={{ textAlign: 'center' }}>{ props.title}</h2>
            <h3 style={{ textAlign: 'center', color:'gray' }}> <span style={{ color: 'black' }}>{ element}</span> { props.year}</h3>
            
        </div>
       
    )
}

export default EducationCard
