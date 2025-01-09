import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Contact Me</h2>
      <p>If you'd like to connect, feel free to reach out via email or social media:</p>
      <div style={{ marginTop: '10px' }}>
        <p><strong>Contact:</strong> (780) 563-2001</p>
        <p><strong>Email:</strong> <a href="mailto:hrittija2001@gmail.com" style={{ color: '#0077b5', textDecoration: 'none' }}>hrittija2001@gmail.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/hrittijab" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>https://github.com/hrittijab</a></p>
        <p><strong>School GitHub:</strong> <a href="https://github.com/Hrittija" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>https://github.com/Hrittija</a></p>
      </div>
    </div>
  );
};

export default Contact;
