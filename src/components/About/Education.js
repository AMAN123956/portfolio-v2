import React from 'react'
import styles from './About.module.css'
import EducationCard from '../UI/About/EducationCard'

function Education() {
    return (
        <div className={styles.educationBox}>
            <EducationCard title={"JSS Academy of Technincal Education"} year={"2019-2023"} />
            <EducationCard title={"Children Public Sr. Sec. School, Fatehpur"} year={"2008-2018"} />
        </div>
    )
}

export default Education
