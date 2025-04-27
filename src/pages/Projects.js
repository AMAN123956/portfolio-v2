import React from 'react';
import { motion } from 'framer-motion';
import { frontend, fullstack, react } from '../components/Collection/Project';
import '../styles/Projects.css';

const Projects = () => {
  const allProjects = [...frontend, ...fullstack, ...react];

  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="projects-hero">
        <motion.div
          className="projects-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1>My Projects</h1>
          <p>Here are some of my recent works</p>
        </motion.div>
      </section>

      <section className="projects-grid">
        {allProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.2 }}
          >
            <div className="project-image">
              <img src={project.imgurl} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-technologies">
                {project.techstack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="button secondary" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.live} className="button primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
};

export default Projects; 