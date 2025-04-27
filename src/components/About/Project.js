import React from 'react'
import Box from '../UI/Box'
// import ProjectCard from './UI/ProjectCard'
import data from '../Collection/project'
function Project() {
    const Title = "Projects"
    return (
        <div>
            <Box headingText={Title} />
            {data.map((item) => (
                <div className="">
                    <h2>{item.title}</h2>
                    <img src={item.imgurl} />
                </div>
            ))}
 

        </div>
    )
}

export default Project
