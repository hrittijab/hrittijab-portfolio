import React from 'react';

const About = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", color: "#333", fontSize: "2.5em", marginBottom: "20px" }}>About Me</h2>
      
      <p style={{ textAlign: "center", color: "#555", fontSize: "1.2em", marginBottom: "30px" }}>
        Here's a little about me.
      </p>
      
      <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        <p><strong>University:</strong> University of Alberta</p>
        <p><strong>Degree:</strong> Bachelor of Science</p>
        <p><strong>Major:</strong> Computer Science</p>
        <p><strong>Minor:</strong> Mathematics</p>
        <p><strong>Expected Graduation:</strong> June 2026</p>
        <p><strong>GPA:</strong> 3.23</p>

        {/* Relevant Coursework */}
        <p><strong>Relevant Coursework:</strong></p>
        <ul>
          <li>Data Structures and Algorithms</li>
          <li>Machine Learning</li>
          <li>Database Management System</li>
          <li>Object Oriented Programming</li>
          <li>Cryptography</li>
          <li>Software Development</li>
          <li>Computer Organization and Architecture</li>
          <li>Artificial Intelligence</li>
          <li>Operating System</li>
        </ul>

        {/* LinkedIn Link */}
        <p style={{ marginTop: "20px" }}>
          <strong>LinkedIn:</strong> 
          <a 
            href="https://www.linkedin.com/in/hrittija/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              color: "#0077b5", 
              textDecoration: "none", 
              fontWeight: "bold", 
              marginLeft: "5px",
            }}
          >
            Visit My LinkedIn
          </a>
        </p>
      </div>

      {/* Skills Section */}
      <div style={{ marginTop: "40px", backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        <h3 style={{ textAlign: "center", color: "#333", fontSize: "2em", marginBottom: "20px" }}>Skills and Tools</h3>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          <div style={{ backgroundColor: "#0077b5", color: "#fff", padding: "15px 25px", borderRadius: "30px", fontSize: "1.2em", width: "200px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>Java</div>
          <div style={{ backgroundColor: "#0077b5", color: "#fff", padding: "15px 25px", borderRadius: "30px", fontSize: "1.2em", width: "200px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>Python</div>
          <div style={{ backgroundColor: "#0077b5", color: "#fff", padding: "15px 25px", borderRadius: "30px", fontSize: "1.2em", width: "200px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>C</div>
          <div style={{ backgroundColor: "#0077b5", color: "#fff", padding: "15px 25px", borderRadius: "30px", fontSize: "1.2em", width: "200px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>Git/GitHub</div>
          <div style={{ backgroundColor: "#0077b5", color: "#fff", padding: "15px 25px", borderRadius: "30px", fontSize: "1.2em", width: "200px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>VS Code</div>
          <div style={{ backgroundColor: "#0077b5", color: "#fff", padding: "15px 25px", borderRadius: "30px", fontSize: "1.2em", width: "200px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>Android Studio</div>
          <div style={{ backgroundColor: "#0077b5", color: "#fff", padding: "15px 25px", borderRadius: "30px", fontSize: "1.2em", width: "200px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>React</div>
          <div style={{ backgroundColor: "#0077b5", color: "#fff", padding: "15px 25px", borderRadius: "30px", fontSize: "1.2em", width: "200px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>AWS</div>
          <div style={{ backgroundColor: "#0077b5", color: "#fff", padding: "15px 25px", borderRadius: "30px", fontSize: "1.2em", width: "200px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>HTML-CSS</div>
          <div style={{ backgroundColor: "#0077b5", color: "#fff", padding: "15px 25px", borderRadius: "30px", fontSize: "1.2em", width: "200px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>Spring Boot</div>
          <div style={{ backgroundColor: "#0077b5", color: "#fff", padding: "15px 25px", borderRadius: "30px", fontSize: "1.2em", width: "200px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>JavaScript</div>
          <div style={{ backgroundColor: "#0077b5", color: "#fff", padding: "15px 25px", borderRadius: "30px", fontSize: "1.2em", width: "200px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>Unit/UI Tests</div>

        </div>
      </div>
    </div>
  );
};

export default About;
