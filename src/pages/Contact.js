import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_USER_ID'
      );
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: error.message });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="contact-hero">
        <motion.div
          className="contact-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1>Let's Work Together</h1>
          <p>Have a project in mind? Let's create something extraordinary!</p>
          <div className="contact-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🚀</span>
              <span>Fast Response</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">💡</span>
              <span>Creative Solutions</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🤝</span>
              <span>Collaborative Approach</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="contact-form-section">
        <motion.div
          className="contact-form-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-button"
              disabled={status.submitting}
            >
              {status.submitting ? (
                <span className="button-content">
                  <span className="spinner"></span>
                  Sending...
                </span>
              ) : (
                <span className="button-content">
                  Send Message
                  <span className="button-icon">→</span>
                </span>
              )}
            </button>
            {status.submitted && (
              <motion.p 
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.p>
            )}
            {status.error && (
              <motion.p 
                className="error-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Oops! Something went wrong. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
      </section>

      <section className="contact-info">
        <motion.div
          className="contact-info-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="contact-info-item">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <a href="mailto:aman.dixit@example.com" className="info-link">
              aman.dixit@example.com
            </a>
          </div>
          <div className="contact-info-item">
            <div className="info-icon">📍</div>
            <h3>Location</h3>
            <p>India</p>
          </div>
          <div className="contact-info-item">
            <div className="info-icon">🌐</div>
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
                Twitter
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Contact; 