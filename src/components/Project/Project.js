import React from 'react'
import styles from './Project.module.css'
import Box from '../UI/Box'
import ProjectCard from '../UI/Project/ProjectCard'
import Footer from '../Footer/Footer'
import { frontend, fullstack, react } from '../Collection/Project'
import codingImg from '../../assets/img/coding.png'
export default function Project() {
    const Title="Project Corner!"
    return (
        <div>
            <Box headingText={Title} />
           <div className={styles.projectBox}>
            {/* <img src={codingImg} className={styles.codingImg} alt="coding_img" /> */}
                <ProjectCard title={"frontend"} data={frontend} />
                <ProjectCard title={"backend"}  data={fullstack } />
                <ProjectCard title={"reactjs"} data={react }/>
            </div>
            <Footer />
        </div>
    )
}
