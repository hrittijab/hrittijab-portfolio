import React from 'react';
import MyPhoto from './myPhoto.jpeg';
import backgroundImage from './background.jpg'; 

const Home = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: 'cover', // Makes sure the background covers the entire div
        backgroundPosition: 'center', // Centers the background image
        backgroundAttachment: 'fixed', // Keeps the background image in place when scrolling
        height: '100vh', // Ensures the background covers the whole viewport height
        color: 'white', // White text for contrast against the background
        boxSizing: 'border-box',
      }}
    >
      <h2
        style={{
          fontSize: '3em',
          color: '#fff',
          fontFamily: "'Pacifico', cursive",
          letterSpacing: '2px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          animation: 'fadeIn 1s ease-out, typing 2s steps(30) 1s forwards',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          display: 'inline-block',
          padding: '20px',
          border: '4px solid pink', // Pink border around the welcome message
          borderRadius: '10px', // Rounded corners for the border
        }}
      >
        Welcome to My Portfolio!
      </h2>
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
      <h3 style={{ marginTop: '15px', color: 'black' }}>Hrittija</h3>
      <p style={{ marginTop: '10px', color: 'black' }}>
        I am a Computer Science student, passionate about transforming academic knowledge into real-world applications.
        With a strong foundation in Data Structures, Algorithms, and Machine Learning, I focus on creating impactful
        software solutions that contribute to organizational growth. I thrive in collaborative environments and am
        always eager to learn new technologies to enhance my technical skillset.
        I have a strong foundation in Python, Java, and C. I have also learned C++ and Kotlin. Additionally, I have
        gained web development skills including HTML, CSS, and JavaScript. I am well-versed in Agile methodologies and
        Waterfall processes and possess a strong understanding of database systems.
      </p>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
