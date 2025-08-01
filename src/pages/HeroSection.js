import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>Find Your Perfect <span className="highlight">Career Path</span></h1>
      <p>AI-powered guidance tailored to your personality and skills</p>
      <div className="hero-buttons">
        <Link to="/login" className="primary-btn">Login</Link>
        <Link to="/register" className="secondary-btn">Register</Link>
        <Link to="/streams" className="outline-btn">Explore Streams →</Link>
      </div>
    </div>
  );
};

export default HeroSection;
