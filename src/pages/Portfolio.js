import React from 'react';

const Portfolio = () => {
  const projects = [
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
      date: " June 2019",
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
      <p style={{ textAlign: "center", color: "#555" }}>Here are some of my projects:</p>

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
            {project.role && <p><strong>Role:</strong> {project.role}</p>} {/* Render only if role exists */}
            <p><strong>Tools & Technologies:</strong> {project.tools}</p>
            <ul>
              {project.description.map((point, idx) => (
                <li key={idx} style={{ marginBottom: "8px" }}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
