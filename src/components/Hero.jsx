import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="fog-container">
        <div className="fog-img"></div>
        <div className="fog-img"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="hero-title-wrapper"
        >
          <h1 className="glitch hero-title" data-text="TECHSTROM 26">TECHSTROM 2026</h1>
          <h2 className="hero-subtitle">DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING</h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="hero-tagline"
        >
          ENTER THE UPSIDE DOWN
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="hero-actions"
        >
           <a href="#about" className="btn">EXPLORE</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
