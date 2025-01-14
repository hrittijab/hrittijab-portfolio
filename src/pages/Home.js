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
      I am a Computer Science student, passionate about transforming academic knowledge into real-world applications. With a strong foundation in Data Structures, Algorithms, and Machine Learning, I focus on creating impactful software solutions that contribute to organizational growth. I thrive in collaborative environments and am always eager to learn new technologies to enhance my technical skillset.
      I have proficiency in Java, Python, C, Kotlin, HTML, and CSS for software development. I have experience using Android Studio for mobile app development and am well-versed in Agile methodologies and Waterfall processes. I also possess a strong understanding of database systems such as MongoDB, Firebase, and SQLite, and am skilled in software testing tools like JUnit, Espresso, and Mockito. Additionally, I am familiar with React and passionate about design patterns, debugging, and hardware components.
      </p>
    </div>
  );
};

export default Home;
