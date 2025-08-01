import React, { useState } from 'react';
import { 
  FaBook, FaLink, FaYoutube, FaGraduationCap, FaFilePdf, 
  FaFlask, FaBriefcase, FaPalette, FaHeartbeat, FaSearch,
  FaChevronDown, FaChevronUp, FaStar, FaExternalLinkAlt 
} from 'react-icons/fa';
import './LearningResources.css';

const LearningResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({
    programming: true,
    medicine: true,
    commerce: true,
    arts: true,
    science: true,
    tools: true
  });

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const resources = {
    programming: {
      icon: <FaBook />,
      title: "Programming & Development",
      items: [
        {
          title: "Clean Code",
          author: "Robert C. Martin",
          type: "book",
          level: "Intermediate",
          year: "2008",
          link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
          rating: 5
        },
        {
          title: "freeCodeCamp.org",
          description: "Free programming tutorials",
          type: "video",
          link: "https://www.youtube.com/c/Freecodecamp",
          rating: 5
        },
        {
          title: "MDN Web Docs",
          description: "Web development documentation",
          type: "documentation",
          link: "https://developer.mozilla.org",
          rating: 5
        }
      ]
    },
    medicine: {
      icon: <FaHeartbeat />,
      title: "Medicine",
      items: [
        {
          title: "Gray's Anatomy",
          description: "Anatomical reference for medical students",
          type: "book",
          link: "https://www.amazon.in/Grays-Anatomy-Student-Henry-Gray/dp/0702077053",
          rating: 4
        },
        {
          title: "Osmosis.org",
          description: "Visual learning for med students",
          type: "website",
          link: "https://www.osmosis.org/",
          rating: 4
        }
      ]
    },
    commerce: {
      icon: <FaBriefcase />,
      title: "Commerce",
      items: [
        {
          title: "Principles of Accounting",
          description: "Accounting basics and concepts",
          type: "book",
          link: "https://openstax.org/books/principles-financial-accounting/pages/1-introduction",
          rating: 4
        },
        {
          title: "CA Foundation Lectures",
          description: "YouTube channel for CA students",
          type: "video",
          link: "https://www.youtube.com/@CAFoundationClasses",
          rating: 3
        }
      ]
    },
    arts: {
      icon: <FaPalette />,
      title: "Arts & Humanities",
      items: [
        {
          title: "History of Modern Art",
          description: "Art history reference",
          type: "book",
          link: "https://www.amazon.com/History-Modern-Art-7th-Edition/dp/0205259472",
          rating: 4
        },
        {
          title: "CrashCourse: Literature",
          description: "Video series on literature and humanities",
          type: "video",
          link: "https://www.youtube.com/user/crashcourse",
          rating: 5
        }
      ]
    },
    science: {
      icon: <FaFlask />,
      title: "Science",
      items: [
        {
          title: "NCERT Physics/Chemistry/Biology",
          description: "Standard books for Intermediate Science",
          type: "book",
          link: "https://ncert.nic.in/ebooks.html",
          rating: 4
        },
        {
          title: "Khan Academy - Science",
          description: "Free interactive science lessons",
          type: "website",
          link: "https://www.khanacademy.org/science",
          rating: 5
        }
      ]
    },
    tools: {
      icon: <FaLink />,
      title: "Useful Tools & Websites",
      items: [
        {
          title: "Stack Overflow",
          description: "Community-driven programming Q&A",
          type: "website",
          link: "https://stackoverflow.com",
          rating: 5
        },
        {
          title: "GeeksforGeeks",
          description: "Coding practice and tutorials",
          type: "website",
          link: "https://www.geeksforgeeks.org",
          rating: 4
        }
      ]
    }
  };

  const filteredResources = Object.entries(resources).reduce((acc, [key, category]) => {
    const filteredItems = category.items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.author && item.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (filteredItems.length > 0) {
      acc[key] = {
        ...category,
        items: filteredItems
      };
    }
    return acc;
  }, {});

  const getTypeIcon = (type) => {
    switch(type) {
      case 'book': return <FaBook className="type-icon" />;
      case 'video': return <FaYoutube className="type-icon" />;
      case 'website': return <FaLink className="type-icon" />;
      case 'documentation': return <FaFilePdf className="type-icon" />;
      default: return <FaLink className="type-icon" />;
    }
  };

  const renderRating = (rating) => {
    return (
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={i < rating ? "star filled" : "star"} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="learning-resources">
      <header className="resources-header">
        <h1><FaGraduationCap /> Developer & Academic Learning Resources</h1>
        <p className="subtitle">Curated collection of the best learning materials across all streams</p>
        
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </header>

      <div className="resource-categories">
        {Object.entries(filteredResources).map(([key, category]) => (
          <section className="category" key={key}>
            <div 
              className="category-header"
              onClick={() => toggleCategory(key)}
            >
              <h2>
                {category.icon} {category.title}
                {expandedCategories[key] ? <FaChevronUp /> : <FaChevronDown />}
              </h2>
              <span className="item-count">{category.items.length} resources</span>
            </div>
            
            {expandedCategories[key] && (
              <div className="resource-list">
                {category.items.map((item, index) => (
                  <div className="resource-item" key={index}>
                    <div className="resource-header">
                      {getTypeIcon(item.type)}
                      <h3>{item.title}</h3>
                    </div>
                    
                    {item.author && <p className="author">by {item.author}</p>}
                    {item.description && <p className="description">{item.description}</p>}
                    
                    <div className="meta">
                      {item.level && <span className="level">{item.level}</span>}
                      {item.year && <span className="year">{item.year}</span>}
                      {item.rating && renderRating(item.rating)}
                    </div>
                    
                    <a 
                      href={item.link} 
                      className="btn" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Visit Resource <FaExternalLinkAlt className="external-icon" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      
    </div>
  );
};

export default LearningResources;