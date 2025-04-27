import React from 'react';
import '../styles/About.css';

const ExperienceCard = ({ experience }) => (
  <div className="experience-card">
    <div className="card-header">
      <h3>{experience.title}</h3>
      <span className="company">{experience.company}</span>
      <span className="period">{experience.period}</span>
    </div>
    <ul className="achievements">
      {experience.achievements.map((achievement, i) => (
        <li key={i}>
          <span className="bullet">▹</span>
          {achievement}
        </li>
      ))}
    </ul>
    {experience.technologies && (
      <div className="technologies">
        {experience.technologies.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
    )}
  </div>
);

const About = () => {
  const experiences = [
    {
      title: "Software Engineer (Full Stack)",
      company: "Made Easy Group",
      period: "Nov 2024 - Present",
      achievements: [
        "Working on Made Easy Live, a live learning platform for JEE and NEET aspirants",
        "Developing and maintaining microservices using Node.js and Express.js",
        "Building responsive UI components with React.js and Next.js",
        "Implementing real-time features using WebSocket and Socket.io",
        "Working with MongoDB for database management"
      ]
    },
    {
      title: "Software Engineer (Full Stack)",
      company: "TMRW an Aditya Birla Group Company",
      period: "May 2024 - Oct 2024",
      achievements: [
        "Led a team of developers to build and optimize a Shopify-based eCommerce website for WROGN a TMRW BRAND",
        "Successfully increased revenue and user engagement through performance-driven development",
        "Ensured the website was SEO-optimized, leading to higher search rankings and organic traffic growth",
        "Implemented best coding practices for scalability, security, and maintainability",
        "Integrated Shopify apps, custom features, and performance enhancements for a seamless shopping experience",
        "Collaborated with designers, marketers, and stakeholders to align technology with business goals",
        "Led the whole website development process from the very beginning to release for 100% users"
      ]
    },
    {
      title: "Software Engineer (Full Stack)",
      company: "BYJU'S",
      period: "Oct 2023 - April 2024",
      achievements: [
        "Developed and integrated an Ebook feature for students to view and search PDFs using react-pdf, with asymmetric encryption for secure access",
        "Created a GraphQL Mutation for ebook uploads and optimized search with TS Vector indexing for faster, more efficient results",
        "Led the migration of article and exam pages from NextJS to PHP/WordPress, improving SEO and organic traffic",
        "Implemented Single Device Sign-On (SSO) to prevent simultaneous logins on multiple devices, using Context API and server-side sessions",
        "Integrated Sentry for real-time error monitoring, improving website stability by proactively addressing critical issues"
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "BYJU'S",
      period: "April 2022 - Sep 2023",
      achievements: [
        "Spearheaded the revamp of Teacher's Side Platform and Student Side Platform, improving user experience significantly",
        "Implemented CHROMA Feature for live classes, enhancing learning engagement",
        "Developed proxy server using Go for Prometheus Push Gateway with Grafana visualization",
        "Created Bookmark Timestamp Feature for live classes using IndexedDB",
        "Optimized video load times and streaming performance",
        "Built scalable backend for real-time doubt resolution system during live classes"
      ],
      technologies: ["React.js", "Node.js", "TypeScript", "Go", "WebSocket", "MongoDB"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science",
      school: "Your University",
      period: "2018 - 2022"
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-content">
          <h1>About Me</h1>
          <p>Crafting digital experiences with code and creativity</p>
        </div>
      </section>

      <section className="about-me-section">
        <h2>Who I Am</h2>
        <div className="about-me-content">
          <div className="about-me-text">
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
              With expertise in both frontend and backend development, I specialize in creating scalable 
              and efficient web applications that deliver exceptional user experiences.
            </p>
            <p>
              My journey in software development has led me through various domains - from educational 
              technology at BYJU'S to e-commerce solutions at TMRW. I have a proven track record of 
              building robust applications using React.js, Node.js, and various other cutting-edge technologies.
            </p>
          </div>
          <div className="skills-container">
            <div className="skills-header">
              <h3 className="skills-title">My Skills</h3>
              <p className="skills-subtitle">Technologies I work with</p>
            </div>
            <div className="skills-content">
              <div className="skill-domain">
                <div className="domain-header">
                  <span className="domain-icon">⚛️</span>
                  <h4 className="domain-title">Frontend</h4>
                </div>
                <div className="skill-list">
                  <div className="skill-item">React.js</div>
                  <div className="skill-item">Next.js</div>
                  <div className="skill-item">TypeScript</div>
                  <div className="skill-item">Redux</div>
                </div>
              </div>

              <div className="skill-domain">
                <div className="domain-header">
                  <span className="domain-icon">🔧</span>
                  <h4 className="domain-title">Backend</h4>
                </div>
                <div className="skill-list">
                  <div className="skill-item">Node.js</div>
                  <div className="skill-item">Express</div>
                  <div className="skill-item">MongoDB</div>
                  <div className="skill-item">GraphQL</div>
                </div>
              </div>

              <div className="skill-domain">
                <div className="domain-header">
                  <span className="domain-icon">🚀</span>
                  <h4 className="domain-title">DevOps</h4>
                </div>
                <div className="skill-list">
                  <div className="skill-item">Docker</div>
                  <div className="skill-item">AWS</div>
                  <div className="skill-item">CI/CD</div>
                  <div className="skill-item">Git</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="about-container">
        <section>
          <h2>Professional Journey</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </section>

        <section className="education-section">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3>{edu.degree} in {edu.field}</h3>
              <p>{edu.school}</p>
              <span className="period">{edu.period}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default About; 