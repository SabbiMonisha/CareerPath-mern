import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CareerPathVisualizer.css';

const CareerPathVisualizer = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const steps = [
    {
      question: "What subjects do you enjoy most?",
      options: ["Math & Science", "Biology & Chemistry", "Commerce & Economics", "Arts & Humanities"],
      type: "multi"
    },
    {
      question: "What kind of work environment do you prefer?",
      options: ["Office/Corporate", "Field/Outdoor", "Creative/Studio", "Research/Lab"],
      type: "single"
    },
    {
      question: "Your preferred work style?",
      options: ["Structured tasks", "Problem solving", "Creative expression", "Helping others"],
      type: "single"
    }
  ];

  const handleAnswer = (stepIndex, answer) => {
    setAnswers(prev => ({
      ...prev,
      [stepIndex]: answer
    }));

    if (stepIndex < steps.length - 1) {
      setActiveStep(stepIndex + 1);
    }
  };

  const calculatePath = () => {
    const scores = { 'MPC': 0, 'BiPC': 0, 'MEC': 0, 'CEC': 0, 'HEC': 0 };

    Object.values(answers).forEach(answer => {
      if (Array.isArray(answer)) {
        answer.forEach(ans => {
          if (ans.includes("Math") || ans.includes("Science")) scores.MPC += 2;
          if (ans.includes("Biology") || ans.includes("Chemistry")) scores.BiPC += 2;
          if (ans.includes("Commerce") || ans.includes("Economics")) scores.MEC += 1.5;
          if (ans.includes("Arts") || ans.includes("Humanities")) scores.HEC += 2;
        });
      } else {
        if (answer.includes("Creative")) { scores.HEC += 1; scores.CEC += 0.5; }
        if (answer.includes("Problem")) scores.MPC += 1;
        if (answer.includes("Helping")) scores.BiPC += 1;
      }
    });

    return Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(item => item[0]);
  };

  const recommendations = activeStep === steps.length ? calculatePath() : null;

  return (
    <div className="pathfinder-container">
      <button className="close-pathfinder" onClick={onClose}>×</button>
      <div className="pathfinder-header">
        <h3>Career Pathfinder</h3>
        <div className="progress-bar">
          {steps.map((_, index) => (
            <div key={index} className={`progress-step ${index <= activeStep ? 'active' : ''}`} />
          ))}
        </div>
      </div>

      {!recommendations ? (
        <div className="pathfinder-question">
          <h4>{steps[activeStep].question}</h4>
          <div className="answer-options">
            {steps[activeStep].options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${answers[activeStep]?.includes?.(option) ? 'selected' : ''}`}
                onClick={() => {
                  if (steps[activeStep].type === "multi") {
                    const newAnswer = answers[activeStep]
                      ? answers[activeStep].includes(option)
                        ? answers[activeStep].filter(a => a !== option)
                        : [...answers[activeStep], option]
                      : [option];
                    setAnswers(prev => ({ ...prev, [activeStep]: newAnswer }));
                  } else {
                    handleAnswer(activeStep, option);
                  }
                }}
              >
                {option}
                {steps[activeStep].type === "multi" && (
                  <span className="checkmark">
                    {answers[activeStep]?.includes(option) ? '✓' : '+'}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="pathfinder-results">
          <h4>Your Recommended Paths</h4>
          <div className="result-cards">
            {recommendations.map((path, index) => (
              <div key={index} className="result-card">
                <h5>{path}</h5>
                <p>{getPathDescription(path)}</p>
                <Link to={`/streams/${path.toLowerCase()}`} className="explore-btn">
                  Explore {path} →
                </Link>
              </div>
            ))}
          </div>
          <button className="retake-btn" onClick={() => setActiveStep(0)}>
            Retake Assessment
          </button>
        </div>
      )}
    </div>
  );
};

const getPathDescription = (path) => {
  const descriptions = {
    'MPC': 'Mathematics, Physics, Chemistry - Ideal for engineering, architecture, and pure sciences.',
    'BiPC': 'Biology, Physics, Chemistry - Perfect for medical, biotechnology, and life science careers.',
    'MEC': 'Mathematics, Economics, Commerce - Best for business, finance, and economics degrees.',
    'CEC': 'Commerce, Economics, Civics - Leads to careers in CA, CS, and business management.',
    'HEC': 'History, Economics, Civics - For law, humanities, and civil service aspirants.'
  };
  return descriptions[path] || 'A promising career path matching your interests.';
};

export default CareerPathVisualizer;
