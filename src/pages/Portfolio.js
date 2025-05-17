import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Freelance Web Development",
      date: "Ongoing",
      role: "Self-Employed Web Developer",
      tools: "HTML, CSS, JavaScript, GitHub, Netlify",
      description: [
        "Designed and deployed responsive websites for small business clients to improve their online presence.",
        "Built clean, mobile-friendly layouts with client-specific content and branding.",
        "Deployed websites using Netlify and assisted clients with custom domain setup and site handoff.",
      ],
    },
    {
      title: "SkillLink – Real-Time Skill Exchange App",
      date: "April 2025 – May 2025",
      role: "Full-Stack Developer",
      tools: "React Native, Spring Boot, AWS (DynamoDB, S3), WebSocket, JWT",
      description: [
        "Developed a full-stack mobile app for users to exchange skills, featuring post creation, filters, and real-time chat.",
        "Implemented secure user authentication with JWT and bcrypt, and session handling with SecureStore.",
        "Used WebSocket (STOMP) for real-time messaging, storing chat history in AWS DynamoDB.",
        "Enabled profile picture uploads via AWS S3 integration.",
        "Designed the UI using React Native with expo-router.",
        '<a href="https://drive.google.com/file/d/1vJofN8zcPZOiF8oIffu0-snSzbEJfZot/view?usp=drive_link" target="_blank" rel="noopener noreferrer">📽️ Watch Demo</a>',
        '<a href="https://github.com/hrittijab/SkillLink-backend" target="_blank" rel="noopener noreferrer">🧠 View Backend source on GitHub</a>',
        '<a href="https://github.com/hrittijab/SkillLink-frontend" target="_blank" rel="noopener noreferrer">🧠 View Frontend source on GitHub</a>',
      ],
    },
    {
      title: "TaskMaster – Cloud-Based To-Do List App",
      date: "March 2025 – May 2025",
      role: "Frontend & Backend Developer",
      tools: "React, Spring Boot, AWS DynamoDB, JWT, REST API",
      description: [
        "Built a cloud-integrated task management web app with deadline tracking, filters, and persistent storage.",
        "Created REST APIs using Spring Boot and integrated them with AWS DynamoDB.",
        "Implemented authentication using JWT and secure session handling.",
        "Developed a responsive React UI and deployed the app for public access.",
        '<a href="https://drive.google.com/file/d/16fsQ2GzppsAkmMwHf390DImAcGtlD2My/view?usp=drive_link" target="_blank" rel="noopener noreferrer">📽️ Watch Demo</a>',
        '<a href="https://github.com/hrittijab/TaskMaster" target="_blank" rel="noopener noreferrer">🧠 View Source on GitHub</a>',
      ],
    },
    {
      title: "Event Lottery Application Development",
      date: "October 2024",
      role: "Organizer Features Development",
      tools: "Java, Android Studio, Firebase, Design Patterns",
      description: [
        "Developed the organizer interface in the Event Lottery application, enabling organizers to create events, manage participant lists, and send notifications.",
        "Designed it in an MVC design pattern.",
        "Integrated APIs for fetching and storing details in Firebase.",
        "Used JUnit and Espresso to write unit and UI tests.",
        '<a href="https://github.com/CMPUT301F24apiary/Hive" target="_blank" rel="noopener noreferrer">🧠 View Source on GitHub</a>',
      ],
    },
    {
      title: "Library Management System",
      date: "March 2023",
      role: "Feature Development",
      tools: "Python, SQLite/MySQL, GitHub, SQL",
      description: [
        "Developed features to view user and book details in the library system.",
        "Experience with SQLite for database design and optimization.",
        "Designed relational database schema.",
        "Utilized Python’s standard library for efficient data handling and integration with SQLite.",
      ],
    },
    {
      title: "Game Development (Duck-Duck-Goose)",
      date: "February 2022",
      tools: "Java, IntelliJ IDEA",
      description: [
        "Used Object-Oriented Programming and data structures to create maintainable code with well-defined classes for game components.",
      ],
    },
    {
      title: "Project Management Trainee",
      date: "June 2019",
      tools: "HTML, CSS, JavaScript, React.js, Angular, Selenium",
      description: [
        "Built practical web development skills by creating user interfaces and web components using HTML, CSS, JavaScript, React.js, Angular.",
        "Used Selenium for cross-browser testing.",
      ],
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#333", textAlign: "center" }}>My Portfolio</h2>
      <p style={{ textAlign: "center", color: "#555" }}>Here are some of my works:</p>

      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "20px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3 style={{ color: "#0077b5" }}>{project.title}</h3>
            <p style={{ margin: "5px 0", fontStyle: "italic" }}>{project.date}</p>
            {project.role && <p><strong>Role:</strong> {project.role}</p>}
            <p><strong>Tools & Technologies:</strong> {project.tools}</p>
            <ul>
              {project.description.map((point, idx) => (
                <li
                  key={idx}
                  style={{ marginBottom: "8px" }}
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
