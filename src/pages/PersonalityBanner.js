import React from 'react';
import { Link } from 'react-router-dom';
import './PersonalityBanner.css';

const PersonalityBanner = () => {
  const personalityTypes = [
    { type: 'Analytical', icon: '🧠', color: '#6C63FF' },
    { type: 'Creative', icon: '🎨', color: '#FF6584' },
    { type: 'Practical', icon: '🔧', color: '#42E2B8' },
    { type: 'Social', icon: '👥', color: '#FF9E3F' },
  ];

  return (
    <section className="personality-banner">
      <div className="banner-content">
        <h3>Discover Careers That Match Your Personality</h3>
        <p>Log in to explore your ideal career path based on your personality.</p>
        
        <div className="personality-types">
          {personalityTypes.map((item, index) => (
            <div 
              key={index} 
              className="type-card" 
              style={{ 
                backgroundColor: `${item.color}20`, 
                borderColor: item.color 
              }}
            >
              <span className="type-icon" style={{ color: item.color }}>{item.icon}</span>
              <span className="type-name">{item.type}</span>
            </div>
          ))}
        </div>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/register" className="register-btn">Register</Link>
        </div>
      </div>
    </section>
  );
};

export default PersonalityBanner;
