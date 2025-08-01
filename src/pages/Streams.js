import React, { useState } from 'react';
import './Streams.css';

const Streams = () => {
  const [activeStream, setActiveStream] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const streams = [
    {
      id: 'mpc',
      name: 'MPC',
      fullForm: 'Mathematics, Physics, Chemistry',
      description: 'The gateway to engineering, architecture, and scientific research careers with strong analytical foundations.',
      icon: '🧮',
      color: '#4361ee',
      details: {
        exams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'EAMCET'],
        careers: [
          { name: 'Aerospace Engineer', icon: '🚀' },
          { name: 'Data Scientist', icon: '📊' },
          { name: 'Research Physicist', icon: '🔭' },
          { name: 'Architect', icon: '🏛️' }
        ],
        colleges: ['IITs', 'NITs', 'BITS Pilani', 'IIITs']
      }
    },
    {
      id: 'bipc',
      name: 'BIPC',
      fullForm: 'Biology, Physics, Chemistry',
      description: 'For future doctors, biotechnologists, and healthcare professionals making a difference in lives.',
      icon: '🧬',
      color: '#3a0ca3',
      details: {
        exams: ['NEET', 'AIIMS', 'JIPMER', 'CMC Vellore'],
        careers: [
          { name: 'Surgeon', icon: '⚕️' },
          { name: 'Medical Researcher', icon: '🔬' },
          { name: 'Geneticist', icon: '🧬' },
          { name: 'Pharmacologist', icon: '💊' }
        ],
        colleges: ['AIIMS', 'CMC Vellore', 'KMC Manipal', 'JIPMER']
      }
    },
    {
      id: 'mec',
      name: 'MEC',
      fullForm: 'Mathematics, Economics, Commerce',
      description: 'Shaping future business leaders, economists, and financial experts driving global economies.',
      icon: '📈',
      color: '#7209b7',
      details: {
        exams: ['CA Foundation', 'CMA', 'IPMAT', 'DU JAT'],
        careers: [
          { name: 'Investment Banker', icon: '💹' },
          { name: 'Economic Analyst', icon: '📉' },
          { name: 'Chartered Accountant', icon: '🧾' },
          { name: 'FinTech Specialist', icon: '📱' }
        ],
        colleges: ['SRCC Delhi', 'Narsee Monjee', 'Christ University', 'St. Xavier\'s']
      }
    },
    {
      id: 'cec',
      name: 'CEC',
      fullForm: 'Civics, Economics, Commerce',
      description: 'For legal minds, policy makers, and social scientists shaping our society.',
      icon: '⚖️',
      color: '#f72585',
      details: {
        exams: ['CLAT', 'UPSC', 'LSAT', 'AILET'],
        careers: [
          { name: 'Corporate Lawyer', icon: '👨‍⚖️' },
          { name: 'Policy Analyst', icon: '📜' },
          { name: 'Human Rights Advocate', icon: '✊' },
          { name: 'Political Scientist', icon: '🏛️' }
        ],
        colleges: ['NALSAR', 'NLU Delhi', 'Symbiosis', 'Jindal Global']
      }
    },
    {
      id: 'hec',
      name: 'HEC',
      fullForm: 'History, Economics, Civics',
      description: 'Exploring human civilization, cultures, and societal development through time.',
      icon: '📜',
      color: '#4cc9f0',
      details: {
        exams: ['UPSC', 'TISS', 'DUET', 'JNUEE'],
        careers: [
          { name: 'Historian', icon: '🏺' },
          { name: 'Museum Curator', icon: '🖼️' },
          { name: 'Archaeologist', icon: '⛏️' },
          { name: 'Cultural Anthropologist', icon: '🌍' }
        ],
        colleges: ['JNU', 'DU', 'University of Hyderabad', 'Pondicherry University']
      }
    }
  ];

  const filteredStreams = streams.filter(stream => 
    stream.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stream.fullForm.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stream.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="streams-dashboard">
      <nav className="streams-nav">
        <h1 className="logo">StreamExplorer</h1>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Find your stream..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
        <ul className="nav-menu">
          {streams.map(stream => (
            <li 
              key={stream.id}
              className={activeStream === stream.id ? 'active' : ''}
              onClick={() => setActiveStream(stream.id)}
              style={{ borderLeft: `4px solid ${activeStream === stream.id ? stream.color : 'transparent'}`}}
            >
              <span className="stream-icon">{stream.icon}</span>
              <span>{stream.name}</span>
            </li>
          ))}
        </ul>
      </nav>

      <main className="streams-content">
        {activeStream ? (
          <div className="stream-detail">
            {(() => {
              const stream = streams.find(s => s.id === activeStream);
              return (
                <>
                  <header style={{ backgroundColor: stream.color }}>
                    <div className="stream-header-content">
                      <h1>{stream.name}</h1>
                      <p>{stream.fullForm}</p>
                    </div>
                    <div className="stream-icon-large">{stream.icon}</div>
                  </header>
                  
                  <div className="detail-content">
                    <section className="overview">
                      <h2>Overview</h2>
                      <p>{stream.description}</p>
                    </section>
                    
                    <div className="detail-cards">
                      <div className="detail-card">
                        <h3>Key Examinations</h3>
                        <ul>
                          {stream.details.exams.map((exam, index) => (
                            <li key={index}>
                              <span className="exam-badge">{exam}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="detail-card">
                        <h3>Career Pathways</h3>
                        <div className="career-grid">
                          {stream.details.careers.map((career, index) => (
                            <div key={index} className="career-item">
                              <span className="career-icon">{career.icon}</span>
                              {career.name}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="detail-card">
                        <h3>Top Institutions</h3>
                        <div className="college-list">
                          {stream.details.colleges.map((college, index) => (
                            <div key={index} className="college-item">
                              <span className="rank-badge">{index + 1}</span>
                              {college}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        ) : (
          <div className="streams-grid">
            <h2 className="grid-title">Explore Academic Streams</h2>
            <p className="grid-subtitle">Select a stream to view detailed information</p>
            
            <div className="cards-container">
              {filteredStreams.map(stream => (
                <div 
                  key={stream.id}
                  className="stream-card"
                  style={{ '--stream-color': stream.color }}
                  onClick={() => setActiveStream(stream.id)}
                >
                  <div className="card-header">
                    <div className="stream-icon">{stream.icon}</div>
                    <h3>{stream.name}</h3>
                    <p className="full-form">{stream.fullForm}</p>
                  </div>
                  <p className="card-description">{stream.description}</p>
                  <button className="explore-btn" style={{ backgroundColor: stream.color }}>
                    Explore Pathway →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Streams;