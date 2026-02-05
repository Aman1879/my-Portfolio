import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = ["Frontend Developer", "Software Developer", "Problem Solver"];
    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="home" id="home">
      <p className="home-p">
        <span className="home-s">●</span> B.Tech 3rd Year Student
      </p>
      <div className="home-container">
        <div className="home-section">
          <div className="info-home">
            <h1>Hi, I'm Aman</h1>
            <h3>{displayText}|</h3>
            <div className="info-p">
              <p>I'm a 3rd-year Computer Science Engineering student specializing in software development, data structures, and building reliable, real-world applications.</p>
              <p>I focus on developing intuitive and scalable digital solutions through clean architecture and thoughtful design.</p>
            </div>
            <div className="btnn">
              <button className="btn-home1" onClick={handleContactClick}>
                <i className="fa-solid fa-arrow-right"></i> Contact Me
              </button>
              <button className="btn-home2">
                <a href="/assets/AmanFinalNew.pdf" download>
                  <i className="fa-solid fa-download"></i> Download CV
                </a>
              </button>
            </div>
            <div className="hhr">
              <hr />
            </div>
            <div className="follow">
              <p className="followw">Follow me:</p>
              <ul>
                <li><a href="https://github.com/Aman1879" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="#discord" target="_blank" rel="noreferrer"><i className="fa-brands fa-discord"></i></a></li>
                <li><a href="https://www.linkedin.com/in/aman-kumar-singh-827631283/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/egaman02/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="imghov1">
          <img src="/images/profile.png" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
