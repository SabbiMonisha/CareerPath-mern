import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import StreamCarousel from './interactive';
import PersonalityBanner from './PersonalityBanner';

const Home = () => {
  const [activePath, setActivePath] = useState(null);
  const [voiceActive, setVoiceActive] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [animatedStats, setAnimatedStats] = useState(false);

  // Animate stats when scrolling to them
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.querySelector('.stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !animatedStats) {
          setAnimatedStats(true);
          animateStats();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedStats]);

  const animateStats = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-count'));
      const duration = 2000;
      const start = 0;
      const increment = target / (duration / 16);
      
      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          current = target;
        }
        stat.textContent = Math.floor(current) + (stat.getAttribute('data-count') === '95' ? '%' : '+');
      }, 16);
    });
  };

  // Mock voice interaction
  const toggleVoiceInteraction = () => {
    if (voiceActive) {
      setVoiceActive(false);
      setAiResponse("");
    } else {
      setVoiceActive(true);
      setAiResponse("Ask me anything about careers... [Voice simulation mode]");
    }
  };

  return (
    <div className="home-container futuristic">
      {/* Animated Grid Background */}
      <div className="grid-bg">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="grid-cell"></div>
        ))}
      </div>

      {/* Minimal Navigation */}
      <nav className="minimal-nav">
        <Link to="/" className="nav-icon" aria-label="Home">⌂</Link>
        <Link to="/explore" className="nav-icon" aria-label="Explore">✧</Link>
        <button 
          className={`nav-icon ${voiceActive ? 'active' : ''}`}
          onClick={toggleVoiceInteraction}
          aria-label="Voice Assistant"
        >
          ◯
        </button>
        <Link to="/profile" className="nav-icon" aria-label="Profile">☺</Link>
      </nav>

      {/* Voice AI Panel */}
      {voiceActive && (
        <div className="voice-ai-panel">
          <div className="voice-wave">
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
          </div>
          <p>{aiResponse}</p>
          <button onClick={toggleVoiceInteraction} aria-label="Close">✕</button>
        </div>
      )}

      {/* Updated Hero Section with Register/Login buttons */}
      <header className="futuristic-hero">
        <h1 className="glitch-text" data-text="SHAPE YOUR FUTURE">SHAPE YOUR FUTURE</h1>
        <p className="hero-subtext">AI-Powered Career Navigation System</p>
        
        <div className="hero-actions">
          <Link 
            to="/register" 
            className="neon-button"
            data-text="REGISTER"
          >
            REGISTER
          </Link>
          <Link 
            to="/login" 
            className="holographic-button"
          >
            LOGIN
          </Link>
        </div>
      </header>

      {/* Updated Path Visualizer */}
      <section className="path-visualizer">
        <div className="visualizer-header">
          <h2>Explore Career Dimensions</h2>
          <p>Select a path to discover its potential</p>
        </div>
        
        <div className="path-grid">
          {['Engineering', 'Medicine', 'Arts', 'Commerce', 'Technology', 'Science'].map((path) => (
            <div 
              key={path}
              className={`path-card ${activePath === path ? 'active' : ''}`}
              onClick={() => setActivePath(path)}
            >
              <div className="path-icon"></div>
              <h3>{path}</h3>
            </div>
          ))}
        </div>
        
        {activePath && (
          <div className="path-details">
            <h3>{activePath} Pathways</h3>
            <p>Discover specialized {activePath.toLowerCase()} career trajectories...</p>
            <Link to={`/path/${activePath.toLowerCase()}`} className="neon-link">
              Explore →
            </Link>
          </div>
        )}
      </section>

      {/* AI Personality Matrix */}
      <PersonalityBanner futuristicMode={true} />

      {/* Neural Stream Selector */}
      <section className="neural-stream-selector">
        <div className="section-header">
          <h2>Knowledge Stream Activation</h2>
          <p>Which educational pathway aligns with your potential?</p>
        </div>
        <StreamCarousel futuristicMode={true} />
      </section>

      {/* Comparison Matrix */}
      <section className="comparison-matrix">
        <div className="matrix-header">
          <h2>Traditional vs. AI-Enhanced Guidance</h2>
          <p>Experience the quantum leap in career planning</p>
        </div>
        
        <div className="matrix-grid">
          <div className="matrix-card traditional">
            <h3>Traditional</h3>
            <ul>
              <li>Static information</li>
              <li>Limited perspectives</li>
              <li>Isolated decisions</li>
              <li>Reactive approach</li>
            </ul>
          </div>
          
          <div className="matrix-card ai">
            <h3>CareerPathAI</h3>
            <ul>
              <li>Dynamic intelligence</li>
              <li>360° insights</li>
              <li>Networked thinking</li>
              <li>Proactive evolution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="futuristic-testimonials">
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="card-glow"></div>
              <div className="testimonial-content">
                <p>"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number" data-count="50000">0+</div>
            <div className="stat-label">Students Guided</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-count="95">0%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-count="150">0+</div>
            <div className="stat-label">Career Paths</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="future-cta">
        <div className="cta-container">
          <h2>Ready to Transform Your Career Trajectory?</h2>
          <p>Activate your next-generation career architect</p>
          <div className="cta-buttons">
            <Link to="/register" className="neon-button">
              CREATE FUTURE PROFILE
            </Link>
            <Link to="/demo" className="holographic-button">
              EXPERIENCE DEMO
            </Link>
          </div>
        </div>
      </section>

      {/* Futuristic Footer */}
      <footer className="futuristic-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>CareerPathAI</h3>
            <p>Beyond Linear Career Thinking</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Dimensions</h4>
              <Link to="/streams">Knowledge Streams</Link>
              <Link to="/future-careers">Future Careers</Link>
              <Link to="/skill-paths">Skill Paths</Link>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <Link to="/insights">AI Insights</Link>
              <Link to="/mentors">Digital Mentors</Link>
              <Link to="/reports">Future Reports</Link>
            </div>
            <div className="link-group">
              <h4>Connect</h4>
              <Link to="/community">Future Builders</Link>
              <Link to="/contact">Quantum Link</Link>
              <Link to="/support">Neural Support</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CareerPathAI | Next-Gen Edition</p>
        </div>
      </footer>
    </div>
  );
};

const testimonials = [
  {
    quote: "The AI showed me career paths I never imagined existed. I'm now training as a Data Ethicist!",
    name: "Aryan K.",
    role: "Future Skills Specialist"
  },
  {
    quote: "CareerPathAI matched me with neuro-technology when all tests said I should be an accountant.",
    name: "Maya R.",
    role: "BCI Developer"
  },
  {
    quote: "As an educator, I've never seen anything that prepares students for the future like this does.",
    name: "Dr. Singh",
    role: "Future Skills Professor"
  }
];

export default Home;