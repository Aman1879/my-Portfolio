import React from 'react';
import '../styles/Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Developer Bootcamp',
      issuer: 'GeekForGeeks',
      date: 'Sep 2025',
      icon: 'fa-code',
      credentialUrl: 'https://media.geeksforgeeks.org/courses/certificates/aac8ebc56a1467484a5af8263cb6dca1.pdf',
      imageUrl: '/images/first.jpg'
    },
    {
      id: 2,
      title: 'Data Structures and Algorithms',
      issuer: 'CPE – Lovely Professional University',
      date: 'June 2025',
      icon: 'fa-sitemap',
      credentialUrl: 'https://drive.google.com/file/d/1KVfU7QVb2cQAnP6izbVQZl1jzlQ7DtFN/view?usp=drive_link',
      imageUrl: '/images/second.jpg'
    },
    {
      id: 3,
      title: 'Java Programming',
      issuer: 'iamNeo – Lovely Professional University',
      date: 'May 2025',
      icon: 'fa-coffee',
      credentialUrl: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BRDR3db7huSDSYjQS72UXPQq6JtbhveLE%3D',
      imageUrl: '/images/third.jpg'
    },
    {
      id: 4,
      title: 'Responsive Web Development',
      issuer: 'FreeCodeCamp',
      date: 'Oct 2023',
      icon: 'fa-globe',
      credentialUrl: 'https://www.freecodecamp.org/certification/fccf5ee199f-9b1d-40ab-ba45-3e89f2007b58/responsive-web-design',
      imageUrl: '/images/fourth.jpg'
    }
  ];

    const handleCertificateClick = (url) => {
      if (url !== '#') {
        window.open(url, '_blank');
      }
    };

  return (
    <section className="certificates" id="certificates">
      <p>ACHIEVEMENTS</p>
      <div className="title">
        <h1>Certifications & Training</h1>
        <p>Professional certificates and training programs</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="certificates-container">
        {certificates.map((cert) => (
            <div 
              className="certificate-card" 
              key={cert.id}
              onClick={() => handleCertificateClick(cert.credentialUrl)}
              style={{ cursor: cert.credentialUrl !== '#' ? 'pointer' : 'default' }}
            >
              <div className="cert-image-container">
                <img
                  src={cert.imageUrl}
                  alt={`${cert.title} certificate`}
                  className="cert-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.classList.add('no-image');
                  }}
                />
                <div className="cert-icon">
                  <i className={`fa-brands ${cert.icon}`}></i>
                </div>
              </div>
              <div className="cert-details">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">
                <i className="fa-regular fa-calendar"></i> {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
