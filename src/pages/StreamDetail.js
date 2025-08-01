import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Added Link import
import './StreamDetail.css';

const StreamDetail = () => {
  const { streamId } = useParams();
  
  // Stream data
  const streamData = {
    mpc: {
      name: 'MPC',
      fullName: 'Mathematics, Physics, Chemistry',
      description: 'The MPC stream focuses on core science and mathematics subjects, ideal for engineering and technology careers.',
      careers: ['Engineering', 'Architecture', 'Pilot', 'Data Scientist', 'Physicist'],
      exams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE']
    },
    bipc: {
      name: 'BiPC',
      fullName: 'Biology, Physics, Chemistry',
      description: 'The BiPC stream is perfect for medical and life science aspirants.',
      careers: ['Doctor', 'Dentist', 'Pharmacist', 'Biotechnologist', 'Agriculture Scientist'],
      exams: ['NEET', 'AIIMS', 'JIPMER']
    },
    mec: {
      name: 'MEC',
      fullName: 'Mathematics, Economics, Commerce',
      description: 'MEC combines mathematics with commerce subjects for business and finance careers.',
      careers: ['Chartered Accountant', 'Economist', 'Investment Banker', 'Actuary', 'Business Analyst'],
      exams: ['CA Foundation', 'CLAT', 'IPMAT']
    },
    cec: {
      name: 'CEC',
      fullName: 'Commerce, Economics, Civics',
      description: 'CEC focuses on commerce with social sciences for management and law careers.',
      careers: ['Company Secretary', 'Lawyer', 'Business Manager', 'Entrepreneur', 'HR Manager'],
      exams: ['CA Foundation', 'CS Foundation', 'CLAT']
    },
    hec: {
      name: 'HEC',
      fullName: 'History, Economics, Civics',
      description: 'HEC is ideal for humanities and social science careers.',
      careers: ['Civil Services', 'Lawyer', 'Journalist', 'Political Scientist', 'Historian'],
      exams: ['UPSC', 'CLAT', 'NDA']
    }
  };

  const stream = streamData[streamId.toLowerCase()] || {
    name: 'Unknown Stream',
    description: 'This stream information is not available.'
  };

  return (
    <div className="stream-detail-container">
      <div className="stream-header">
        <h1>{stream.name}</h1>
        <h2>{stream.fullName}</h2>
        <p className="stream-description">{stream.description}</p>
      </div>

      <div className="stream-sections">
        <div className="career-section">
          <h3>Potential Careers</h3>
          <ul>
            {stream.careers?.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </div>

        <div className="exam-section">
          <h3>Entrance Exams</h3>
          <ul>
            {stream.exams?.map((exam, index) => (
              <li key={index}>{exam}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="action-buttons">
        <Link to="/streams" className="back-button">← Back to All Streams</Link>
        <Link to="/assessment" className="assessment-button">Take Career Assessment</Link>
      </div>
    </div>
  );
};

export default StreamDetail;