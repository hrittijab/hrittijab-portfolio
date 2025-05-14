import React from 'react';
import MyPhoto from './myPhoto.jpeg';

const Home = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        height: '100vh',
        boxSizing: 'border-box',
        color: '#1a1a1a',
      }}
    >
      <h2
        style={{
          fontSize: '2.8em',
          color: '#2c2c2c',
          fontFamily: "'Pacifico', cursive",
          letterSpacing: '1.5px',
          textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
          padding: '15px',
          border: '4px solid #f9b6c0',
          borderRadius: '12px',
          backgroundColor: '#fff0f3',
        }}
      >
        Hello, I'm Hrittija!
      </h2>

      <img
        src={MyPhoto}
        alt="Hrittija Bhattacharjee"
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          marginTop: '20px',
          border: '3px solid #0077b5',
        }}
      />

      <h3 style={{ marginTop: '20px', fontSize: '1.6em', color: '#0077b5' }}>
        Aspiring Software Developer | Problem Solver | Lifelong Learner
      </h3>

      <p style={{ marginTop: '20px', maxWidth: '750px', margin: 'auto', fontSize: '1.1em', lineHeight: '1.7' }}>
        I'm a Computer Science student with a love for building things that matter. Whether it's an app to simplify daily
        tasks or a full-stack project to connect people — I thrive on transforming ideas into working software.
        <br /><br />
        I'm especially passionate about learning new technologies and applying them to real-world problems. My experience spans 
        languages like <strong>Python, Java, C and JavaScript</strong>, and full-stack work with 
        <strong> React, Spring Boot, AWS</strong>, and <strong>PostgreSQL, DynamoDB, MongoDB, Firebase</strong>.
        <br /><br />
        Outside of coding, I enjoy mentoring, hackathons, and contributing to communities that empower youth in tech. 
        I'm constantly exploring new domains like machine learning and cloud computing, and I believe that curiosity + consistency = growth 🚀.
      </p>
    </div>
  );
};

export default Home;
