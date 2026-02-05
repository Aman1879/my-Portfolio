import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'GlowStack Salon',
      description: 'A modern salon booking platform with responsive service showcase, real-time appointment slot availability, and customer inquiry system. Secure admin dashboard for managing bookings, messages, and automated email notifications.',
      tags: ['Node.js', 'Express.js', 'React', 'Tailwind CSS', 'Axios', 'Nodemailer'],
      link: 'https://github.com/Aman1879/Salon-Website',
      demo: 'https://egglowstack.netlify.app/',
      bg: '/images/salon.svg'
    },
    {
      id: 2,
      title: 'Eg Marketplace',
      description: 'A full-stack multi-vendor marketplace enabling buyers, vendors, and admins to manage products, orders, and commissions through role-based authentication. Includes product search, shopping cart, ratings, dispute handling, and real-time notifications using Socket.IO.',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Socket.IO', 'JWT'],
      link: 'https://github.com/Aman1879/EG-Marketplace',
      demo: 'https://egmarketplace.netlify.app/',
      bg: '/images/marketplace.svg'
    },
    {
      id: 3,
      title: 'Livestock Management System',
      description: 'A web-based system to manage livestock records, health tracking, and farm operations. Streams animal tracking, health monitoring, and enables efficient farm operations through a scalable web platform.',
      tags: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
      link: 'https://github.com/Aman1879/livestock-management-system',
      demo: 'https://apnalivestock.42web.io/auth/login.php',
      bg: '/images/livestock.svg'
    }
  ];

  return (
    <section className="projects" id="project">
      <p>MY WORK</p>
      <div className="title">
        <h1>Recent Projects</h1>
        <p>Showcase of my recent work and accomplishments</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div
              className="project-bg"
              style={{ backgroundImage: `url(${project.bg})` }}
            />
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="project-links">
                <a href={project.link} className="project-link" title="View Code">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href={project.demo} className="project-link" title="Live Demo">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
