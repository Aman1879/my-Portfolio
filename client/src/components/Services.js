import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const skillsData = [
    {
      category: 'Languages',
      skills: ['Java', 'C++', 'PHP', 'JavaScript (ES6+)']
    },
    {
      category: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'React.js']
    },
    {
      category: 'Backend & Runtimes',
      skills: ['Node.js', 'Express.js', 'WordPress (CMS)']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'MongoDB Atlas', 'phpMyAdmin']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Netlify', 'Render', 'Vercel']
    },
    {
      category: 'Core CS Fundamentals',
      skills: ['DSA', 'DBMS', 'Operating Systems', 'Object-Oriented Programming (OOP)']
    },
    {
      category: 'Soft Skills',
      skills: ['Leadership & Team Management', 'Problem-Solving', 'Adaptability', 'Growth Mindset']
    }
  ];

  return (
    <section className="services" id="services">
      <p>TECHNICAL PROFICIENCY</p>
      <div className="title">
        <h1>Skills</h1>
        <p>Languages, frameworks, tools, and core competencies</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="services-container">
        {skillsData.map((skillGroup, index) => (
          <div className="skill-group" key={index}>
            <h3>{skillGroup.category}</h3>
            <div className="skills-list">
              {skillGroup.skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
