import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const skillsData = [
    {
      category: 'Languages',
      skills: ['Java', 'C++', 'PHP', 'C', 'JavaScript']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'WordPress']
    },
    {
      category: 'Tools & Platforms',
      skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'phpMyAdmin']
    },
    {
      category: 'Core CS Fundamentals',
      skills: ['DBMS', 'OS', 'SQL', 'OOP Concepts', 'DSA']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem-Solving', 'Discipline-focused', 'Solution-Oriented', 'Growth Mindset']
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
