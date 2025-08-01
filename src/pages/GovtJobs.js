import React, { useState, useEffect } from 'react';
import './GovtJobs.css';

const GovtJobs = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedJob, setExpandedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [filterDifficulty, setFilterDifficulty] = useState('All');

  // Load saved jobs from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedJobs')) || [];
    setSavedJobs(saved);
  }, []);

  const jobCategories = [
    { id: 'All', name: 'All Categories', icon: '🌐', color: '#6366f1' },
    { id: 'Defense', name: 'Defense', icon: '🪖', color: '#ef4444' },
    { id: 'Engineering', name: 'Engineering', icon: '⚙️', color: '#14b8a6' },
    { id: 'IT', name: 'IT & Software', icon: '💻', color: '#8b5cf6' },
    { id: 'Banking', name: 'Banking', icon: '🏦', color: '#10b981' },
    { id: 'Administrative', name: 'Administrative', icon: '📋', color: '#f59e0b' },
    { id: 'Research', name: 'Research', icon: '🔬', color: '#3b82f6' },
    { id: 'Medical', name: 'Medical', icon: '🏥', color: '#ec4899' },
    { id: 'Education', name: 'Education', icon: '📚', color: '#84cc16' },
    { id: 'Railways', name: 'Railways', icon: '🚂', color: '#f97316' },
  ];

  const difficultyLevels = [
    { id: 'All', name: 'All Levels' },
    { id: 'Low', name: 'Low' },
    { id: 'Medium', name: 'Medium' },
    { id: 'High', name: 'High' },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Indian Army',
      exams: ['NDA', 'CDS', 'TES', 'AFCAT', 'TGC'],
      eligibility: '12th with PCM (NDA/TES), Graduation (CDS/AFCAT), Engineering (TGC)',
      path: 'Lieutenant → Captain → Major → Colonel → Brigadier → Major General → Lieutenant General → General',
      link: 'https://joinindianarmy.nic.in/',
      guide: 'https://www.ssbcrack.com/',
      category: 'Defense',
      salary: '₹5-15 LPA (starting) + allowances',
      ageLimit: '16.5-19.5 (NDA), 19-25 (CDS), 20-27 (AFCAT)',
      icon: '🪖',
      difficulty: 'High',
      selectionRate: '0.5-2%',
      preparationTime: '1-2 years',
      perks: [
        'Prestige and honor',
        'Pension benefits',
        'Healthcare for family',
        'Housing facilities',
        'Subsidized ration',
        'Adventure opportunities'
      ],
      lastDate: 'Varies by exam',
      applicationFee: '₹100-400'
    },
    {
      id: 2,
      title: 'Indian Navy',
      exams: ['NDA', 'CDS', '10+2 B.Tech', 'INET'],
      eligibility: '12th with PCM (NDA/10+2), Graduation (CDS), B.Tech (INET)',
      path: 'Sub Lieutenant → Lieutenant → Lieutenant Commander → Commander → Captain → Commodore → Rear Admiral → Vice Admiral → Admiral',
      link: 'https://www.joinindiannavy.gov.in/',
      guide: 'https://www.ssbcrack.com/navy-exam-preparation',
      category: 'Defense',
      salary: '₹6-18 LPA (starting) + allowances',
      ageLimit: '16.5-19.5 (NDA), 19-24 (CDS), 21-25 (INET)',
      icon: '⚓',
      difficulty: 'High',
      selectionRate: '1-3%',
      preparationTime: '1-2 years',
      perks: [
        'International postings',
        'Naval housing',
        'Subsidized education for children',
        'Sports facilities',
        'Early retirement with pension'
      ],
      lastDate: 'Varies by exam',
      applicationFee: '₹100-400'
    },
    {
      id: 3,
      title: 'Indian Air Force',
      exams: ['NDA', 'CDS', 'AFCAT', 'MET'],
      eligibility: '12th with PCM (NDA), Graduation (CDS/AFCAT), Engineering (MET)',
      path: 'Flying Officer → Flight Lieutenant → Squadron Leader → Wing Commander → Group Captain → Air Commodore → Air Vice Marshal → Air Marshal → Air Chief Marshal',
      link: 'https://indianairforce.nic.in/',
      guide: 'https://www.ssbcrack.com/air-force-exam-preparation',
      category: 'Defense',
      salary: '₹6-20 LPA (starting) + flying allowances',
      ageLimit: '16.5-19.5 (NDA), 20-24 (AFCAT), 19-25 (CDS)',
      icon: '✈️',
      difficulty: 'High',
      selectionRate: '0.8-2.5%',
      preparationTime: '1-2 years',
      perks: [
        'Flying experience',
        'Technical training',
        'Global postings',
        'Housing in air force stations',
        'Aviation medical benefits'
      ],
      lastDate: 'Varies by exam',
      applicationFee: '₹100-400'
    },
    {
      id: 4,
      title: 'UPSC Civil Services',
      exams: ['UPSC CSE'],
      eligibility: 'Graduation in any discipline',
      path: 'SDM → DM → Secretary → Additional Secretary → Secretary to Govt of India',
      link: 'https://upsc.gov.in/',
      guide: 'https://www.clearias.com/',
      category: 'Administrative',
      salary: '₹9-15 LPA (starting) + perks',
      ageLimit: '21-32 years (general)',
      icon: '📜',
      difficulty: 'Very High',
      selectionRate: '0.1-0.3%',
      preparationTime: '2-3 years',
      perks: [
        'Highest administrative authority',
        'Government housing',
        'Domestic help allowance',
        'Lifetime pension',
        'Influence policy making'
      ],
      lastDate: 'February/March yearly',
      applicationFee: '₹100'
    },
    {
      id: 5,
      title: 'State PSC',
      exams: ['State PSC Exams'],
      eligibility: 'Graduation in any discipline',
      path: 'Deputy Collector → District Collector → Commissioner',
      link: 'https://www.india.gov.in/website-state-public-service-commissions',
      guide: 'https://www.studyiq.com/state-pcs-exam/',
      category: 'Administrative',
      salary: '₹8-14 LPA (starting)',
      ageLimit: '21-35 years (varies by state)',
      icon: '🏛️',
      difficulty: 'High',
      selectionRate: '0.5-1.5%',
      preparationTime: '1-2 years',
      perks: [
        'State-level authority',
        'Local postings',
        'Housing benefits',
        'Pension benefits',
        'District administration experience'
      ],
      lastDate: 'Varies by state',
      applicationFee: '₹200-500'
    },
    {
      id: 6,
      title: 'SSC CGL',
      exams: ['SSC CGL'],
      eligibility: 'Graduation in any discipline',
      path: 'Inspector → Assistant Section Officer → Section Officer → Under Secretary',
      link: 'https://ssc.nic.in/',
      guide: 'https://www.sscadda.com/ssc-cgl/',
      category: 'Administrative',
      salary: '₹5-12 LPA (varies by post)',
      ageLimit: '18-32 years',
      icon: '📄',
      difficulty: 'Medium',
      selectionRate: '2-5%',
      preparationTime: '6-12 months',
      perks: [
        'Central government benefits',
        'Job security',
        'Posting in ministries',
        'Promotions by seniority',
        'Work-life balance'
      ],
      lastDate: 'December/January yearly',
      applicationFee: '₹100'
    },
    {
      id: 7,
      title: 'IBPS PO',
      exams: ['IBPS PO'],
      eligibility: 'Graduation in any discipline',
      path: 'Probationary Officer → Assistant Manager → Deputy Manager → Branch Manager',
      link: 'https://www.ibps.in/',
      guide: 'https://www.bankersadda.com/ibps-po-exam-pattern/',
      category: 'Banking',
      salary: '₹6-10 LPA (starting) + allowances',
      ageLimit: '20-30 years',
      icon: '💰',
      difficulty: 'Medium',
      selectionRate: '3-6%',
      preparationTime: '6-12 months',
      perks: [
        'Bank quarters facility',
        'Medical benefits',
        'Loan concessions',
        'Performance bonuses',
        'Transferable job'
      ],
      lastDate: 'August/September yearly',
      applicationFee: '₹600 (general)'
    },
    {
      id: 8,
      title: 'SBI PO',
      exams: ['SBI PO'],
      eligibility: 'Graduation in any discipline',
      path: 'Probationary Officer → Assistant Manager → Deputy Manager → Chief Manager → AGM → DGM → GM',
      link: 'https://sbi.co.in/careers',
      guide: 'https://www.smartkeeda.com/SBI-PO-Exam-Preparation/',
      category: 'Banking',
      salary: '₹8-12 LPA (starting) + perks',
      ageLimit: '21-30 years',
      icon: '🏦',
      difficulty: 'High',
      selectionRate: '2-4%',
      preparationTime: '8-12 months',
      perks: [
        'Higher salary than other banks',
        'International postings possible',
        'Subsidized loans',
        'Performance incentives',
        'Job security'
      ],
      lastDate: 'October/November yearly',
      applicationFee: '₹750 (general)'
    },
    {
      id: 9,
      title: 'RBI Grade B',
      exams: ['RBI Grade B'],
      eligibility: 'Graduation with 60% (50% for SC/ST)',
      path: 'Grade B Officer → Grade C → Grade D → Grade E → Grade F (Executive Director)',
      link: 'https://www.rbi.org.in/',
      guide: 'https://www.oliveboard.in/rbi-grade-b/',
      category: 'Banking',
      salary: '₹12-16 LPA (starting) + perks',
      ageLimit: '21-30 years',
      icon: '🏛️',
      difficulty: 'Very High',
      selectionRate: '0.5-1.5%',
      preparationTime: '1-2 years',
      perks: [
        'Central banking authority',
        'Research opportunities',
        'Policy influence',
        'Quarter facility',
        'International exposure'
      ],
      lastDate: 'July/August yearly',
      applicationFee: '₹850 (general)'
    },
    {
      id: 10,
      title: 'ISRO Scientist',
      exams: ['ISRO Scientist Exam', 'GATE', 'ICAR'],
      eligibility: 'B.E/B.Tech/M.Sc in relevant field',
      path: 'Scientist/Engineer SC → SB → SD → SE → SF → SG',
      link: 'https://www.isro.gov.in/careers',
      guide: 'https://www.space-tech.com/isro-exam-preparation/',
      category: 'Engineering',
      salary: '₹8-15 LPA (starting)',
      ageLimit: '21-35 years',
      icon: '🛰️',
      difficulty: 'High',
      selectionRate: '1-3%',
      preparationTime: '1-2 years',
      perks: [
        'Space research opportunities',
        'Cutting-edge technology',
        'International collaborations',
        'Housing in ISRO campuses',
        'Pride in national projects'
      ],
      lastDate: 'Varies by recruitment',
      applicationFee: '₹250-500'
    },
    {
      id: 11,
      title: 'DRDO Scientist',
      exams: ['DRDO Scientist Exam', 'GATE'],
      eligibility: 'B.E/B.Tech/M.Sc in relevant field',
      path: 'Scientist B → C → D → E → F → G → H',
      link: 'https://www.drdo.gov.in/careers',
      guide: 'https://www.defence-career.com/drdo-exam-guide/',
      category: 'Engineering',
      salary: '₹9-14 LPA (starting)',
      ageLimit: '21-28 years (B), up to 35 for higher posts',
      icon: '🔫',
      difficulty: 'High',
      selectionRate: '1-2.5%',
      preparationTime: '1-2 years',
      perks: [
        'Defense research projects',
        'Security clearance benefits',
        'Technical challenges',
        'Government housing',
        'Defense sector prestige'
      ],
      lastDate: 'Varies by recruitment',
      applicationFee: '₹100'
    },
    {
      id: 12,
      title: 'BHEL Engineer',
      exams: ['BHEL ET', 'GATE'],
      eligibility: 'B.E/B.Tech in relevant discipline',
      path: 'Engineer Trainee → Assistant Engineer → Deputy Manager → Manager → Senior Manager',
      link: 'https://www.bhel.com/index.php/careers',
      guide: 'https://www.engineerscareer.com/bhel-exam/',
      category: 'Engineering',
      salary: '₹7-12 LPA (starting)',
      ageLimit: '21-27 years (ET)',
      icon: '⚡',
      difficulty: 'Medium',
      selectionRate: '3-7%',
      preparationTime: '6-12 months',
      perks: [
        'Heavy industry experience',
        'Plant postings',
        'Technical training',
        'Performance bonuses',
        'Job stability'
      ],
      lastDate: 'Varies by recruitment',
      applicationFee: '₹500'
    },
    {
      id: 13,
      title: 'NIC Scientist',
      exams: ['NIC Scientist Exam', 'GATE'],
      eligibility: 'B.E/B.Tech/MCA in relevant field',
      path: 'Scientist B → C → D → E → F → G',
      link: 'https://www.nic.in/recruitments/',
      guide: 'https://www.techgovjobs.com/nic-exam-guide/',
      category: 'IT',
      salary: '₹8-14 LPA (starting)',
      ageLimit: '21-30 years',
      icon: '💾',
      difficulty: 'High',
      selectionRate: '2-4%',
      preparationTime: '1 year',
      perks: [
        'Government IT projects',
        'Digital India initiatives',
        'Technical challenges',
        'Work with ministries',
        'Job security'
      ],
      lastDate: 'Varies by recruitment',
      applicationFee: '₹800'
    },
    {
      id: 14,
      title: 'CDAC Scientist',
      exams: ['CDAC C-CAT'],
      eligibility: 'B.E/B.Tech/MCA/M.Sc in relevant field',
      path: 'Project Engineer → Project Manager → Program Manager → Group Coordinator',
      link: 'https://www.cdac.in/index.aspx?id=ca_careers',
      guide: 'https://www.cdacguide.com/',
      category: 'IT',
      salary: '₹6-12 LPA (starting)',
      ageLimit: '21-35 years',
      icon: '🖥️',
      difficulty: 'Medium',
      selectionRate: '5-10%',
      preparationTime: '6-12 months',
      perks: [
        'Advanced computing projects',
        'Research opportunities',
        'Technical training',
        'Project-based work',
        'Government benefits'
      ],
      lastDate: 'Varies by recruitment',
      applicationFee: '₹1000'
    },
    {
      id: 15,
      title: 'AIIMS Doctor',
      exams: ['AIIMS PG', 'NEET PG'],
      eligibility: 'MBBS for PG courses',
      path: 'Resident → Senior Resident → Assistant Professor → Associate Professor → Professor',
      link: 'https://www.aiims.edu/',
      guide: 'https://www.medicalprep.com/aiims-pg/',
      category: 'Medical',
      salary: '₹10-18 LPA (starting)',
      ageLimit: 'No upper limit for PG courses',
      icon: '🏥',
      difficulty: 'Very High',
      selectionRate: '0.5-1.5%',
      preparationTime: '2-3 years',
      perks: [
        'Premier medical institution',
        'Research opportunities',
        'International collaborations',
        'Healthcare benefits',
        'Teaching experience'
      ],
      lastDate: 'January/February yearly',
      applicationFee: '₹1500'
    },
    {
      id: 16,
      title: 'Railway Engineer',
      exams: ['RRB JE', 'GATE'],
      eligibility: 'Diploma/B.E/B.Tech in relevant discipline',
      path: 'Junior Engineer → Senior Section Engineer → Assistant Engineer → Divisional Engineer',
      link: 'https://www.indianrailways.gov.in/',
      guide: 'https://www.railwayprep.com/rrb-je/',
      category: 'Engineering',
      salary: '₹5-9 LPA (starting)',
      ageLimit: '18-33 years',
      icon: '🚂',
      difficulty: 'Medium',
      selectionRate: '5-10%',
      preparationTime: '6-12 months',
      perks: [
        'Railway quarters',
        'Travel concessions',
        'Job security',
        'Field experience',
        'Pension benefits'
      ],
      lastDate: 'Varies by recruitment',
      applicationFee: '₹500'
    },
    {
      id: 17,
      title: 'UGC NET Professor',
      exams: ['UGC NET'],
      eligibility: 'Post Graduation with 55%',
      path: 'Assistant Professor → Associate Professor → Professor → HOD → Dean',
      link: 'https://www.ugcnet.nta.nic.in/',
      guide: 'https://www.teachingcareer.com/ugc-net/',
      category: 'Education',
      salary: '₹7-15 LPA (starting) + allowances',
      ageLimit: 'No upper limit',
      icon: '📚',
      difficulty: 'High',
      selectionRate: '3-6%',
      preparationTime: '1-2 years',
      perks: [
        'Academic freedom',
        'Research opportunities',
        'Long vacations',
        'Respect in society',
        'Consultancy options'
      ],
      lastDate: 'March/September yearly',
      applicationFee: '₹1000'
    },
    {
      id: 18,
      title: 'CSIR Scientist',
      exams: ['CSIR NET', 'GATE'],
      eligibility: 'M.Sc/Ph.D in relevant science discipline',
      path: 'Scientist B → C → D → E → F → G',
      link: 'https://www.csir.res.in/',
      guide: 'https://www.sciencecareer.com/csir-exam/',
      category: 'Research',
      salary: '₹8-14 LPA (starting)',
      ageLimit: '28-35 years for entry level',
      icon: '🔬',
      difficulty: 'Very High',
      selectionRate: '1-2%',
      preparationTime: '2-3 years',
      perks: [
        'Cutting-edge research',
        'International collaborations',
        'Lab facilities',
        'Conference opportunities',
        'Scientific reputation'
      ],
      lastDate: 'Varies by recruitment',
      applicationFee: '₹1000'
    },
    {
      id: 19,
      title: 'ICAR Scientist',
      exams: ['ICAR NET', 'ASRB NET'],
      eligibility: 'M.Sc/Ph.D in agricultural sciences',
      path: 'Scientist B → C → D → E → F → G',
      link: 'https://www.icar.org.in/',
      guide: 'https://www.agricareer.com/icar-exam/',
      category: 'Research',
      salary: '₹7-12 LPA (starting)',
      ageLimit: '21-35 years',
      icon: '🌾',
      difficulty: 'High',
      selectionRate: '2-4%',
      preparationTime: '1-2 years',
      perks: [
        'Agricultural research',
        'Field postings',
        'Rural development work',
        'Farm facilities',
        'Government benefits'
      ],
      lastDate: 'Varies by recruitment',
      applicationFee: '₹500'
    },
    {
      id: 20,
      title: 'CISF Officer',
      exams: ['UPSC CAPF'],
      eligibility: 'Graduation in any discipline',
      path: 'Assistant Commandant → Deputy Commandant → Commandant → DIG → IG → ADG → DG',
      link: 'https://www.cisf.gov.in/',
      guide: 'https://www.defenceprep.com/capf-ac/',
      category: 'Defense',
      salary: '₹7-12 LPA (starting) + allowances',
      ageLimit: '20-25 years',
      icon: '🛡️',
      difficulty: 'High',
      selectionRate: '1-3%',
      preparationTime: '1-2 years',
      perks: [
        'Industrial security',
        'Central government benefits',
        'Quick promotions',
        'Special duty allowances',
        'Pension benefits'
      ],
      lastDate: 'April/May yearly',
      applicationFee: '₹200'
    }
  ];

  const toggleSaveJob = (jobId) => {
    const newSavedJobs = savedJobs.includes(jobId)
      ? savedJobs.filter(id => id !== jobId)
      : [...savedJobs, jobId];
    
    setSavedJobs(newSavedJobs);
    localStorage.setItem('savedJobs', JSON.stringify(newSavedJobs));
  };

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = activeTab === 'All' || job.category === activeTab;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.exams.some(exam => exam.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDifficulty = filterDifficulty === 'All' || job.difficulty === filterDifficulty;
    const matchesSaved = !showSavedOnly || savedJobs.includes(job.id);
    
    return matchesCategory && matchesSearch && matchesDifficulty && matchesSaved;
  });

  const toggleExpand = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  const getCategoryColor = (categoryId) => {
    return jobCategories.find(c => c.id === categoryId)?.color || '#6366f1';
  };

  return (
    <div className="govt-jobs-container">
      {/* Hero Section with Search */}
      

      {/* Interactive Category Pills */}
      <div className="category-pills-container">
        <div className="category-pills">
          {jobCategories.map(category => (
            <button
              key={category.id}
              className={`category-pill ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
              style={{ '--pill-color': category.color }}
            >
              <span className="pill-icon">{category.icon}</span>
              <span className="pill-text">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="advanced-filters">
        <div className="filter-group">
          <label>Difficulty:</label>
          <select 
            value={filterDifficulty} 
            onChange={(e) => setFilterDifficulty(e.target.value)}
          >
            {difficultyLevels.map(level => (
              <option key={level.id} value={level.id}>{level.name}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label>
            <input 
              type="checkbox" 
              checked={showSavedOnly}
              onChange={() => setShowSavedOnly(!showSavedOnly)}
            />
            Show Saved Only
          </label>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat-card">
          <div className="stat-value">{jobs.length}+</div>
          <div className="stat-label">Career Options</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">50+</div>
          <div className="stat-label">Entrance Exams</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">100%</div>
          <div className="stat-label">Verified Information</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{savedJobs.length}</div>
          <div className="stat-label">Saved Jobs</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* Left Sidebar - Quick Facts */}
        <aside className="quick-facts">
          <h3>Government Job Insights</h3>
          <div className="fact-card">
            <h4>Job Security</h4>
            <p>Government jobs offer unparalleled job security with minimal layoffs</p>
          </div>
          <div className="fact-card">
            <h4>Benefits</h4>
            <p>Includes pensions, healthcare, housing allowances and more</p>
          </div>
          <div className="fact-card">
            <h4>Growth</h4>
            <p>Clear promotion paths with time-bound increments</p>
          </div>
          <div className="fact-card">
            <h4>Work-Life Balance</h4>
            <p>Generally better than private sector with fixed working hours</p>
          </div>
          
          <div className="quick-links">
            <h3>Quick Links</h3>
            <a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer">Government of India</a>
            <a href="https://www.upsc.gov.in/" target="_blank" rel="noopener noreferrer">UPSC</a>
            <a href="https://ssc.nic.in/" target="_blank" rel="noopener noreferrer">SSC</a>
            <a href="https://www.ibps.in/" target="_blank" rel="noopener noreferrer">IBPS</a>
          </div>
        </aside>

        {/* Main Jobs Grid */}
        <main className="jobs-mosaic">
          {filteredJobs.length === 0 ? (
            <div className="no-results">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <h3>No matching jobs found</h3>
              <p>Try adjusting your filters or search term</p>
            </div>
          ) : (
            filteredJobs.map((job, index) => (
              <div 
                key={index} 
                className={`job-tile ${expandedJob === index ? 'expanded' : ''}`}
                style={{ '--tile-color': getCategoryColor(job.category) }}
              >
                <div className="tile-header" onClick={() => toggleExpand(index)}>
                  <div className="job-icon">{job.icon}</div>
                  <div className="job-title">
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-category">{job.category}</span>
                      <span className="job-difficulty" data-difficulty={job.difficulty}>
                        {job.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="expand-indicator">
                    {expandedJob === index ? '−' : '+'}
                  </div>
                </div>
                
                <div className="tile-body">
                  <div className="job-exams">
                    <h4>Entrance Exams:</h4>
                    <div className="exam-tags">
                      {job.exams.map((exam, i) => (
                        <span key={i} className="exam-tag">{exam}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="job-details">
                    <div className="detail-row">
                      <span>Eligibility:</span>
                      <span>{job.eligibility}</span>
                    </div>
                    <div className="detail-row">
                      <span>Career Path:</span>
                      <span>{job.path}</span>
                    </div>
                    <div className="detail-row">
                      <span>Salary:</span>
                      <span>{job.salary}</span>
                    </div>
                    <div className="detail-row">
                      <span>Age Limit:</span>
                      <span>{job.ageLimit}</span>
                    </div>
                    <div className="detail-row">
                      <span>Selection Rate:</span>
                      <span>{job.selectionRate}</span>
                    </div>
                  </div>
                  
                  {expandedJob === index && (
                    <div className="job-expanded">
                      <div className="perks-section">
                        <h4>Key Perks:</h4>
                        <ul className="perks-list">
                          {job.perks.map((perk, i) => (
                            <li key={i}>{perk}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="additional-details">
                        <div className="detail-col">
                          <h5>Preparation Time</h5>
                          <p>{job.preparationTime}</p>
                        </div>
                        <div className="detail-col">
                          <h5>Last Date</h5>
                          <p>{job.lastDate}</p>
                        </div>
                        <div className="detail-col">
                          <h5>Application Fee</h5>
                          <p>{job.applicationFee}</p>
                        </div>
                      </div>
                      
                      <div className="action-buttons">
                        <button 
                          className={`save-button ${savedJobs.includes(job.id) ? 'saved' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSaveJob(job.id);
                          }}
                        >
                          {savedJobs.includes(job.id) ? 'Saved' : 'Save'}
                        </button>
                        <a 
                          href={job.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="official-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Official Website
                        </a>
                        <a 
                          href={job.guide} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="guide-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Preparation Guide
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </main>
      </div>
      
      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <p>Government Career Navigator helps students and job seekers discover prestigious government career opportunities across India.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#top">Back to Top</a>
            <a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer">Government Portal</a>
            <a href="https://www.upsc.gov.in/" target="_blank" rel="noopener noreferrer">UPSC</a>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@govtcareers.in</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Government Career Navigator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GovtJobs;