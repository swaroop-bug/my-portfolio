import React from 'react';
import  './App.css';
import Hero from './Hero'; // <-- Import the Hero component

function App() {
  return (
    <div className="app-bg">
      {/* Decorative shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
      
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">Swaroop.dev</h1>
        <ul className="navbar-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <Hero /> {/* <-- Use the Hero component here */}

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="skills-container">
          <h3>Skills</h3>
          <div className="skills-grid">
            {[
              { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
              { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
              { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
              { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
              { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
              { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
              { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
              { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
              { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
            ].map(skill => (
              <div key={skill.name} className="skill-card">
                <img src={skill.logo} alt={skill.name + ' logo'} className="skill-logo" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="projects-container">
          <h3>Projects</h3>
          <div className="projects-grid">
            {[
              { title: "Hospital Management System", desc: "A full-stack app with patient and staff modules." },
              { title: "Airplane Reservation System", desc: "Easy to use UI. Search, compare, and book the best flight deals to destinations worldwide" },
              { title: "Portfolio Website", desc: "Built with React and Tailwind, showcasing my work." },
              { title: "Calculator", desc: "A simple reliable tool for quick and accurate calculation." },
              {title: "Weather App", desc: "A web app that provides real-time weather updates using OpenWeatherMap API." },
              { title: "Event reservation website", desc: "A web application that allows users to book and manage event reservations." }
            ].map(project => (
              <div key={project.title} className="project-card">
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <p>Let's connect!</p>
          <p>Email: <a href="mailto:swaroopkapte@gmail.com">swaroopkapte@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/swaroop-kapte-23656928b">Swaroop Kapte</a></p>
          <p>GitHub: <a href="https://github.com/swaroop-bug">swaroop-bug</a></p>
          <p>Looking forward to collaborating with you.</p>
          <p>© 2025 Swaroop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
