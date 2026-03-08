import React from 'react';
import '../styles/Internships.css';

const Internships = () => {
  const experiences = [
    {
      id: 1,
      section: 'Internship',
      position: 'Full Stack Web Developer Intern',
      company: 'DSPL Technologies',
      duration: 'Jun 2025 - Aug 2025',
      location: 'Remote',
      description: `Built and maintained full-stack applications using React.js and Node.js. Designed modular REST APIs, improved backend architecture, and contributed to better reliability and performance across features.`,
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST APIs'],
      icon: 'fa-code'
    },
    {
      id: 2,
      section: 'Freelance',
      position: 'Freelance Frontend Developer',
      company: 'CodeTexa',
      duration: 'Jan 2026 - Present',
      location: 'Remote',
      description: `Developing responsive frontend experiences for a Learning Management System with role-based access. Implemented secure API integration with JWT-based authentication and optimized state-driven UI performance for better engagement.`,
      technologies: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'REST APIs', 'JWT', 'Netlify'],
      icon: 'fa-laptop-code'
    }
  ];

  return (
    <section className="internships" id="internships">
      <p>PROFESSIONAL EXPERIENCE</p>
      <div className="title">
        <h1>Work & Experience</h1>
        <p>Internship and freelance roles from my recent professional journey</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="internships-container">
        {experiences.map((internship) => (
          <div className="internship-card" key={internship.id}>
            <div className="internship-header">
              <div className="company-icon">
                <i className={`fa-solid ${internship.icon}`}></i>
              </div>
              <div className="company-info">
                <p className="experience-type">{internship.section}</p>
                <h3>{internship.position}</h3>
                <p className="company-name">
                  {internship.companyLink ? (
                    <a href={internship.companyLink} target="_blank" rel="noopener noreferrer">{internship.company}</a>
                  ) : (
                    internship.company
                  )}
                </p>
              </div>
            </div>

            <div className="internship-meta">
              <span className="duration">
                <i className="fa-regular fa-calendar"></i> {internship.duration}
              </span>
              <span className="location">
                <i className="fa-solid fa-location-dot"></i> {internship.location}
              </span>
            </div>

            <p className="internship-description">{internship.description}</p>

            <div className="internship-technologies">
              <p className="tech-label">Technologies:</p>
              <div className="tech-tags">
                {internship.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
