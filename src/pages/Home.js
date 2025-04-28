import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { frontend, fullstack, react } from '../components/Collection/Project';
import * as THREE from 'three';
import profileImg from '../assets/img/coding.png';
import '../styles/Home.css';
import Typewriter from 'typewriter-effect';
import AnimatedCoding from '../components/AnimatedCoding';

const Home = () => {
  const mountRef = useRef(null);
  const skillLogos = [
    { name: "HTML5", icon: "🌐", color: "#E44D26" },
    { name: "CSS3", icon: "🎨", color: "#264DE4" },
    { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
    { name: "React.js", icon: "⚛️", color: "#61DAFB" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" }
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: '#1B9EFC',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  // Get top 3 projects (one from each category)
  const featuredProjects = [
    fullstack[0], // Blog Website
    fullstack[2], // JSSCONNECT
    react[0] // DRIVE CLONE
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React.js", icon: "⚛️" },
        { name: "Bootstrap", icon: "🎯" },
        { name: "Tailwind CSS", icon: "🎪" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚂" },
        { name: "MongoDB", icon: "🍃" },
        { name: "REST APIs", icon: "🔌" },
        { name: "Socket.io", icon: "🔊" },
        { name: "Passport.js", icon: "🔑" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "📦" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" },
        { name: "Postman", icon: "📬" },
        { name: "Heroku", icon: "🚀" },
        { name: "Netlify", icon: "🌐" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', x);
      containerRef.current.style.setProperty('--mouse-y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero" ref={containerRef}>
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span>Full Stack Developer</span>
            </motion.div>
            
            <motion.h1
              className="hero-title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="gradient-text">Hi, I'm</span>
              <br />
              <span className="name">Aman Dixit</span>
            </motion.h1>
            
            <motion.h2
              className="hero-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'UI/UX Designer',
                    'Problem Solver',
                    'Tech Enthusiast'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </motion.h2>
            
            <motion.div
              className="hero-buttons"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a 
                href="/resume.pdf" 
                className="button download-btn"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-icon">📄</span>
                <span className="button-text">Download Resume</span>
                <span className="button-arrow">→</span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="hero-image-container">
              <div className="hero-image">
                <img src={profileImg} alt="Aman Dixit" />
              </div>
              <div className="hero-shape"></div>
            </div>
            
            <div className="floating-elements">
              <div className="floating-element html">HTML5</div>
              <div className="floating-element css">CSS3</div>
              <div className="floating-element js">JavaScript</div>
              <div className="floating-element react">React</div>
              <div className="floating-element node">Node.js</div>
              <div className="floating-element mongo">MongoDB</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="skills">
        <motion.div
          className="section-header"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <h2>Skills & Expertise</h2>
          <p>Technologies I work with</p>
        </motion.div>
        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6 + categoryIndex * 0.2 }}
            >
              <h3>{category.title}</h3>
              <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <h4>{skill.name}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="featured-projects">
        <motion.div
          className="section-header"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <h2>Featured Projects</h2>
          <p>Some of my best work</p>
        </motion.div>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
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
        </motion.div>
      </section>

      <section className="contact-cta">
        <motion.div
          className="cta-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? Let's discuss how we can create something amazing together.</p>
          <Link to="/contact" className="button primary">
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home; 