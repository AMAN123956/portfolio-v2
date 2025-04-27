import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import Header from './Header'
import Skill from './Skill'
import Work from './Work'
import Blog from './Blog'
import Contact from './Contact'
import Footer from '../Footer/Footer'

const Landing = () => {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Hi, I'm</span>
              <br />
              <span className="name">Aman Dixit</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I create beautiful, responsive, and user-friendly web applications
              with modern technologies and best practices.
            </p>
            <div className="hero-buttons">
              <Link to="/project" className="button primary">
                View Projects
              </Link>
              <Link to="/about" className="button secondary">
                About Me
              </Link>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <Header />
      <Skill />
      <Work />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
