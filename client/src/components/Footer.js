import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Aman</h2>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#services">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-social">
          <a href="https://github.com/Aman1879" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aman-kumar-singh-827631283/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://wa.me/916299211631" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <p className="footer-copy">&copy; 2026 Aman. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
