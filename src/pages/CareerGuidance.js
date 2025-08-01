import React, { useState } from 'react';
import './CareerGuidance.css';

const careers = [
  {
    title: 'Engineering',
    description: 'Explore all major engineering streams with detailed information on colleges, entrance exams, and career prospects.',
    icon: '⚙️',
    color: '#3f51b5',
    details: {
      overview: "Engineering offers excellent career prospects with various specializations. The field combines innovation with practical problem-solving.",
      specializations: [
        "Computer Science Engineering",
        "Electronics and Communication",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electrical Engineering",
        "Chemical Engineering",
        "Aerospace Engineering",
        "Biotechnology Engineering"
      ],
      exams: [
        { name: "JEE Main", link: "https://jeemain.nta.nic.in/" },
        { name: "JEE Advanced", link: "https://jeeadv.ac.in/" },
        { name: "BITSAT", link: "https://www.bitsadmission.com/" },
        { name: "State Engineering Exams", link: "#" }
      ],
      duration: "4 years (B.Tech/B.E)",
      topColleges: ["IITs", "NITs", "BITS Pilani", "DTU", "VIT", "IIITs"],
      careerOptions: ["Software Engineer", "Data Scientist", "Mechanical Designer", "Civil Engineer", "Electronics Engineer", "AI/ML Specialist"],
      salaryRange: "₹4-15 LPA (starting), up to ₹50+ LPA for top talent",
      growth: "High demand with 15% annual growth in tech sectors"
    }
  },
  {
    title: 'Medicine',
    description: 'Pathways for MBBS, BDS, and allied health sciences with NEET preparation tips.',
    icon: '🩺',
    color: '#e91e63',
    details: {
      overview: "The medical field is highly respected with opportunities to serve society while building a rewarding career.",
      specializations: [
        "MBBS",
        "BDS",
        "BAMS (Ayurveda)",
        "BHMS (Homeopathy)",
        "BPT (Physiotherapy)",
        "Nursing",
        "Pharmacy",
        "Medical Research"
      ],
      exams: [
        { name: "NEET UG", link: "https://neet.nta.nic.in/" },
        { name: "NEET PG", link: "https://nbe.edu.in/" },
        { name: "AIIMS Entrance", link: "https://www.aiimsexams.ac.in/" },
        { name: "JIPMER", link: "https://jipmer.edu.in/" }
      ],
      duration: "5.5 years (MBBS including internship)",
      topColleges: ["AIIMS", "CMC Vellore", "Maulana Azad Medical College", "Armed Forces Medical College"],
      careerOptions: ["Doctor", "Surgeon", "Medical Researcher", "Hospital Administrator", "Public Health Specialist"],
      salaryRange: "₹6-12 LPA (starting), up to ₹25+ LPA for specialists",
      growth: "Steady 7% annual growth with high job security"
    }
  },
  {
    title: 'Commerce & Finance',
    description: 'Comprehensive guide to careers in CA, CS, Banking, Finance, and Business.',
    icon: '💼',
    color: '#4caf50',
    details: {
      overview: "Commerce offers diverse opportunities in finance, accounting, and business management with excellent earning potential.",
      specializations: [
        "Chartered Accountancy (CA)",
        "Company Secretary (CS)",
        "Cost and Management Accountancy (CMA)",
        "Business Administration",
        "Economics",
        "Financial Analysis",
        "Investment Banking",
        "Actuarial Science"
      ],
      exams: [
        { name: "CA Foundation", link: "https://www.icai.org/" },
        { name: "CS Foundation", link: "https://www.icsi.edu/" },
        { name: "CMA Foundation", link: "https://icmai.in/" },
        { name: "CAT", link: "https://iimcat.ac.in/" },
        { name: "XAT", link: "https://xatonline.in/" }
      ],
      duration: "3-5 years depending on specialization",
      topColleges: ["SRCC Delhi", "Loyola College Chennai", "St. Xavier's Mumbai", "Christ University"],
      careerOptions: ["Chartered Accountant", "Financial Analyst", "Investment Banker", "Business Consultant", "Economist"],
      salaryRange: "₹5-20 LPA (starting), unlimited growth potential",
      growth: "8-10% annual growth in finance sector"
    }
  },
  {
    title: 'Arts & Humanities',
    description: 'Explore diverse fields like History, Languages, Psychology, Sociology, and Journalism.',
    icon: '🎨',
    color: '#ff9800',
    details: {
      overview: "Arts and humanities develop critical thinking and communication skills valuable in many professions.",
      specializations: [
        "Psychology",
        "Sociology",
        "History",
        "Political Science",
        "English Literature",
        "Journalism",
        "Mass Communication",
        "Fine Arts"
      ],
      exams: [
        { name: "DUET", link: "https://nta.ac.in/" },
        { name: "JMI Entrance", link: "https://jmi.ac.in/" },
        { name: "TISS BAT", link: "https://tiss.edu/" }
      ],
      duration: "3 years (BA) + 2 years (MA optional)",
      topColleges: ["Lady Shri Ram College", "St. Stephen's College", "Presidency College", "JNU"],
      careerOptions: ["Psychologist", "Journalist", "Content Writer", "Historian", "Policy Analyst"],
      salaryRange: "₹3-10 LPA (starting), varies by field",
      growth: "6% annual growth in creative fields"
    }
  },
  {
    title: 'Science & Research',
    description: 'Career paths in pure sciences, space research, ISRO, DRDO and scientific organizations.',
    icon: '🔬',
    color: '#9c27b0',
    details: {
      overview: "Science careers focus on research and innovation, contributing to technological and medical advancements.",
      specializations: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "Biotechnology",
        "Astrophysics",
        "Environmental Science",
        "Geology"
      ],
      exams: [
        { name: "IIT JAM", link: "https://jam.iitr.ac.in/" },
        { name: "JEST", link: "https://www.jest.org.in/" },
        { name: "NEST", link: "https://www.nestexam.in/" },
        { name: "TIFR Entrance", link: "https://univ.tifr.res.in/" }
      ],
      duration: "3 years (B.Sc) + 2 years (M.Sc) + PhD for research",
      topColleges: ["IISc Bangalore", "IISERs", "TIFR", "NISER"],
      careerOptions: ["Research Scientist", "Space Scientist", "Data Analyst", "Professor", "Science Writer"],
      salaryRange: "₹4-12 LPA (starting), higher in research organizations",
      growth: "9% annual growth in research fields"
    }
  },
  {
    title: 'Defence & Govt Jobs',
    description: 'Complete roadmap for NDA, Navy, SSC, UPSC, Railways and other government careers.',
    icon: '🪖',
    color: '#f44336',
    details: {
      overview: "Government jobs offer stability, prestige, and opportunities to serve the nation.",
      specializations: [
        "Indian Armed Forces (NDA, CDS)",
        "Civil Services (UPSC)",
        "Banking (IBPS, SBI)",
        "Railways",
        "Police Services",
        "Teaching (CTET, NET)",
        "Public Sector Undertakings",
        "State Government Jobs"
      ],
      exams: [
        { name: "UPSC Civil Services", link: "https://upsc.gov.in/" },
        { name: "NDA", link: "https://upsc.gov.in/" },
        { name: "CDS", link: "https://upsc.gov.in/" },
        { name: "SSC CGL", link: "https://ssc.nic.in/" },
        { name: "Banking Exams", link: "https://www.ibps.in/" }
      ],
      duration: "Varies by position (Training typically 1-2 years)",
      topColleges: ["NDA", "IMA", "OTA", "LBSNAA"],
      careerOptions: ["IAS Officer", "IPS Officer", "Defense Officer", "Bank PO", "Government Scientist"],
      salaryRange: "₹5-15 LPA (starting), with excellent benefits",
      growth: "Stable with regular promotions"
    }
  },
  {
    title: 'Agriculture',
    description: 'Detailed information on B.Sc Agriculture, Horticulture, Veterinary and research paths.',
    icon: '🌾',
    color: '#8bc34a',
    details: {
      overview: "Agriculture is India's backbone with growing opportunities in agri-tech and food processing industries.",
      specializations: [
        "Agriculture Science",
        "Horticulture",
        "Veterinary Science",
        "Dairy Technology",
        "Food Technology",
        "Agricultural Engineering",
        "Forestry",
        "Fishery Science"
      ],
      exams: [
        { name: "ICAR AIEEA", link: "https://icar.nta.nic.in/" },
        { name: "State Agriculture Entrance Exams", link: "#" }
      ],
      duration: "4 years (B.Sc Agriculture)",
      topColleges: ["PAU Ludhiana", "GBPUAT Pantnagar", "TNAU Coimbatore", "IVRI Bareilly"],
      careerOptions: ["Agricultural Scientist", "Horticulturist", "Veterinarian", "Food Technologist", "Agri-Business Manager"],
      salaryRange: "₹3-8 LPA (starting), higher in private sector",
      growth: "12% annual growth in agri-tech sector"
    }
  },
  {
    title: 'Law',
    description: 'Comprehensive guide to becoming a lawyer, judge, or legal consultant with top law schools info.',
    icon: '⚖️',
    color: '#795548',
    details: {
      overview: "Legal careers offer intellectual challenge and opportunities to shape society through justice system.",
      specializations: [
        "Corporate Law",
        "Criminal Law",
        "Constitutional Law",
        "Intellectual Property Law",
        "International Law",
        "Tax Law",
        "Environmental Law",
        "Human Rights Law"
      ],
      exams: [
        { name: "CLAT", link: "https://consortiumofnlus.ac.in/" },
        { name: "AILET", link: "https://nludelhi.ac.in/" },
        { name: "LSAT India", link: "https://www.discoverlaw.in/" }
      ],
      duration: "5 years (BA LLB) or 3 years (LLB after graduation)",
      topColleges: ["NLUs", "Symbiosis Law School", "ILS Pune", "Faculty of Law Delhi University"],
      careerOptions: ["Lawyer", "Judge", "Legal Advisor", "Corporate Counsel", "Public Prosecutor"],
      salaryRange: "₹5-15 LPA (starting), higher in corporate law",
      growth: "10% annual growth in legal sector"
    }
  }
];

const CareerGuidance = () => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (career) => {
    setSelectedCareer(career);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="career-guidance">
      <div className="hero-section">
        <h1>Discover Your Perfect Career Path</h1>
        <p className="subtitle">Find the ideal career that matches your skills, interests, and aspirations</p>
      </div>

      <div className="career-grid">
        {careers.map((career, index) => (
          <div 
            key={index} 
            className="career-card"
            style={{ '--card-color': career.color }}
            onClick={() => openModal(career)}
          >
            <div className="card-icon">{career.icon}</div>
            <h3>{career.title}</h3>
            <p>{career.description}</p>
            <button className="explore-btn">
              Explore <span>→</span>
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedCareer && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header" style={{ backgroundColor: selectedCareer.color }}>
              <div className="modal-icon">{selectedCareer.icon}</div>
              <h2>{selectedCareer.title}</h2>
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
            </div>
            
            <div className="modal-content">
              <div className="overview-section">
                <h3>Overview</h3>
                <p>{selectedCareer.details.overview}</p>
              </div>
              
              <div className="details-grid">
                <div className="detail-card">
                  <h4>Specializations</h4>
                  <ul>
                    {selectedCareer.details.specializations.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-card">
                  <h4>Entrance Exams</h4>
                  <ul className="exam-links">
                    {selectedCareer.details.exams.map((exam, i) => (
                      <li key={i}>
                        <a href={exam.link} target="_blank" rel="noopener noreferrer">
                          {exam.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-card">
                  <h4>Top Colleges</h4>
                  <ul>
                    {selectedCareer.details.topColleges.map((college, i) => (
                      <li key={i}>{college}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-card">
                  <h4>Career Options</h4>
                  <ul>
                    {selectedCareer.details.careerOptions.map((option, i) => (
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-card highlight-card">
                  <h4>Duration</h4>
                  <p>{selectedCareer.details.duration}</p>
                </div>
                
                <div className="detail-card highlight-card">
                  <h4>Salary Range</h4>
                  <p>{selectedCareer.details.salaryRange}</p>
                </div>
                
                <div className="detail-card highlight-card">
                  <h4>Industry Growth</h4>
                  <p>{selectedCareer.details.growth}</p>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button 
                className="close-modal-btn"
                onClick={closeModal}
                style={{ backgroundColor: selectedCareer.color }}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerGuidance;