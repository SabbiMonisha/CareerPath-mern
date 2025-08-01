import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // Close menu when route changes
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">CareerPath</span>
          <span className="logo-dot">.</span>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/streams">Streams</NavLink>
          <NavLink to="/CareerGuidance">Career Guidance</NavLink>
          <NavLink to="/govt-jobs">Govt Jobs</NavLink>
          <NavLink to="/learning-resources">
            <span className="nav-icon"></span> Learning Resources
          </NavLink>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

// Custom NavLink component for active styling
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
                  (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link 
      to={to} 
      className={`nav-link ${isActive ? 'active' : ''}`}
    >
      {children}
      <span className="nav-link-underline"></span>
    </Link>
  );
};

export default Navbar;