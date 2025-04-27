import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "📜" },
        { name: "React.js", icon: "⚛️" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "Tailwind CSS", icon: "🌊" },
        { name: "Next.js", icon: "▲" },  // Using the Next.js triangle logo symbol
        { name: "Typescript", icon: "🔡" },
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚂" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "REST APIs", icon: "🔌" },
        { name: "Socket.io", icon: "🔄" },
        { name: "Passport.js", icon: "🔑" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", icon: "📦" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "📝" },
        { name: "Postman", icon: "📮" },
        { name: "Heroku", icon: "☁️" },
        { name: "Netlify", icon: "🌐" }
      ]
    }
  ];

  return (
    <motion.div
      className="skills-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="skills-hero">
        <motion.div
          className="skills-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="skill-content">
            <h1>My Skills</h1>
            <p>Technologies I work with</p>
          </div>
        </motion.div>
      </section>

      <section className="skills-container">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="skill-category"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + categoryIndex * 0.2 }}
          >
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.title}</h2>
            </div>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill-card"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + skillIndex * 0.1 }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <h3>{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
};

export default Skills; 