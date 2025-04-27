import React from 'react'
import Box from '../UI/Box'
import styles from './Skill.module.css'
import SkillCard from '../UI/Skill/SkillCard'
import Footer from '../Footer/Footer'
import { fdata, bdata, vdata } from '../Collection/Skill'
function Skill() {
    const Title="My Skills!"
    return (
        <div>
            <Box headingText={Title} />
              {/* Frontend Skills */}
            <div className={styles.skillBox}>
                <h2 className={styles.heading1}>FRONTEND SKILLS</h2>
                <div className={styles.skillSubBox} >
                    <SkillCard type={fdata}/>
                </div>
            </div>
            {/* Backend Skills */}
            <div className={styles.skillBox}>
                <h2 className={styles.heading1}>BACKEND SKILLS</h2>
                <div className={styles.skillSubBox} >
                    <SkillCard type={bdata}/>
                </div>
            </div>
             {/* Version Control and other tools Skills */}
             <div className={styles.skillBox}>
                <h2 className={styles.heading1}>VERSION CONTROL & TOOLS</h2>
                <div className={styles.skillSubBox} >
                    <SkillCard type={vdata}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Skill
