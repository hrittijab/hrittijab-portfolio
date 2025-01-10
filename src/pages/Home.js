import React from 'react';
import MyPhoto from './myPhoto.jpeg'; // Ensure the path is correct based on your file location

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '2.5em', color: '#333' }}>Welcome to My Portfolio!</h2>
      <img
        src={MyPhoto} 
        alt="Hrittija Bhattacharjee"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          marginTop: '20px',
          border: '2px solid #0077b5',
        }}
      />
      <h3 style={{ marginTop: '15px', color: '#0077b5' }}>Hrittija</h3>
      <p style={{ marginTop: '10px', color: '#555' }}>
        I’m a Computer Science student passionate about software development and problem-solving.
      </p>
    </div>
  );
};

export default Home;
