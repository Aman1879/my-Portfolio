import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <p>ABOUT ME</p>
      <div className="title">
        <h1>Building Meaningful</h1>
        <h1>Digital Experiences</h1>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="about-container">
        <div className="info-about">
          <div className="about-info">
            <p>
              I'm a dedicated software developer passionate about creating modern, responsive, and functional web applications.
              <br />My journey began with curiosity for how systems work, evolving into a strong foundation in software engineering, data structures, and front-end development.
            </p>
            <p>
              I enjoy building projects, exploring new technologies, and solving real-world problems through clean code and meaningful design.
            </p>
          </div>
          <h2>What Drives Me</h2>
          <div className="card">
            <div className="c1">
              <h3><i className="fa-solid fa-code"></i> Languages</h3>
              <p>HTML, CSS, JavaScript, Java, C++, React, Tailwind, Node.js, PHP</p>
            </div>
            <div className="c1">
              <h3><i className="fa-solid fa-graduation-cap"></i> Education</h3>
              <p>B.Tech in Computer Science Engineering</p>
            </div>
            <div className="c1">
              <h3><i className="fa-solid fa-folder-open"></i> Projects</h3>
              <p>Built more than 3 projects</p>
            </div>
          </div>
        </div>
        <div className="imghov">
          <img src="/images/About.jpg" alt="About" />
        </div>
      </div>
    </section>
  );
};

export default About;
