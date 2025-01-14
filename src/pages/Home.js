import React from 'react';
import MyPhoto from './myPhoto.jpeg'; 

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
      I have a strong foundation in Python, Java and C. I have also learned C++ and Kotlin. Additionally, I have gained web development skills including HTML, CSS and JavaScript. I am well-versed in Agile methodologies and Waterfall processes and possess a strong understanding of database system.
      </p>
    </div>
  );
};

export default Home;
