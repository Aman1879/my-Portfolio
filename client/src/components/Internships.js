import React from 'react';
import '../styles/Internships.css';

const Internships = () => {
  const internships = [
    {
      id: 1,
      position: 'Web Developer Intern',
      company: 'Vanillakart',
      companyLink: 'https://vanillakart.com/',
      duration: 'Sep 2025 – Nov 2025',
      location: 'Remote',
      description: `Developed hybrid web solutions by building scalable applications with the MERN stack and customizing WordPress CMS platforms to meet diverse client requirements. Streamlined User Experience (UX) by designing dynamic interfaces using React.js and optimizing WordPress themes for responsiveness and speed. Collaborated on backend integration tasks using Node.js while ensuring site stability through rigorous testing and plugin management.`,
      technologies: ['WordPress', 'React.js', 'Node.js', 'MongoDB', 'Rest API'],
      icon: 'fa-code'
    }
  ];

  return (
    <section className="internships" id="internships">
      <p>PROFESSIONAL EXPERIENCE</p>
      <div className="title">
        <h1>Internships</h1>
        <p>My professional development and work experience</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="internships-container">
        {internships.map((internship) => (
          <div className="internship-card" key={internship.id}>
            <div className="internship-header">
              <div className="company-icon">
                <i className={`fa-solid ${internship.icon}`}></i>
              </div>
              <div className="company-info">
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
