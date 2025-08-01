import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './interactive.css';

const Interactive = () => {
  const streams = [
    { name: 'MPC', fullName: 'Mathematics, Physics, Chemistry', careers: ['Engineering', 'Architecture', 'Pilot', 'Data Science'], color: '#6C63FF' },
    { name: 'BiPC', fullName: 'Biology, Physics, Chemistry', careers: ['Medicine', 'Biotechnology', 'Pharmacy', 'Agriculture'], color: '#FF6584' },
    { name: 'MEC', fullName: 'Mathematics, Economics, Commerce', careers: ['Chartered Accountant', 'Economist', 'Investment Banker', 'Actuary'], color: '#42E2B8' },
    { name: 'CEC', fullName: 'Commerce, Economics, Civics', careers: ['Company Secretary', 'Business Management', 'Lawyer', 'Entrepreneur'], color: '#FF9E3F' },
    { name: 'HEC', fullName: 'History, Economics, Civics', careers: ['Civil Services', 'Law', 'Journalism', 'Political Science'], color: '#9C6CFF' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    let interval;
    if (autoRotate) {
      interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % streams.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [autoRotate, streams.length]);

  return (
    <div className="stream-carousel">
      <div className="carousel-container">
        {streams.map((stream, index) => {
          let position = 'right';
          if (index === activeIndex) position = 'center';
          else if ((index === activeIndex - 1) || (activeIndex === 0 && index === streams.length - 1)) position = 'left';

          return (
            <div
              key={stream.name}
              className={`carousel-card ${position}`}
              style={{
                backgroundColor: stream.color,
                zIndex: position === 'center' ? 2 : 1,
                transform: position === 'center' ? 'translateX(-50%) scale(1)' : (position === 'left' ? 'translateX(-100%) scale(0.9)' : 'translateX(0%) scale(0.9)'),
                opacity: position === 'center' ? 1 : 0.7
              }}
            >
              <h3>{stream.name}</h3>
              <p>{stream.fullName}</p>
              <div className="career-list">
                <h4>Potential Careers:</h4>
                <ul>
                  {stream.careers.map((career, i) => <li key={i}>{career}</li>)}
                </ul>
              </div>
              <Link to={`/streams/${stream.name.toLowerCase()}`} className="explore-btn">Explore →</Link>
            </div>
          );
        })}
      </div>

      <div className="carousel-controls">
        <button className="prev-btn" onClick={() => { setAutoRotate(false); setActiveIndex(prev => (prev - 1 + streams.length) % streams.length); }}>‹</button>
        <div className="dots">
          {streams.map((_, index) => (
            <button key={index} className={`dot ${index === activeIndex ? 'active' : ''}`} onClick={() => { setAutoRotate(false); setActiveIndex(index); }} />
          ))}
        </div>
        <button className="next-btn" onClick={() => { setAutoRotate(false); setActiveIndex(prev => (prev + 1) % streams.length); }}>›</button>
      </div>
    </div>
  );
};

export default Interactive;
