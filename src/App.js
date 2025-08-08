import React from 'react';


function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Swaroop.dev</h1>
        <ul className="flex space-x-6">
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gray-100" id="hero">
        <div className="text-center p-6 max-w-xl">
          <h2 className="text-4xl font-extrabold mb-4">Hi, I'm Swaroop 👋</h2>
          <p className="text-lg mb-6">Engineering student | Web Developer | Passionate about Cloud, Cybersecurity & Building Scalable Web Solutions | Future-Ready & Always Curious</p>
          <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            View My Projects
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white" id="skills">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React", "Flask", "SQL", "Tailwind CSS", "Python", "Node Js", "C", "Java"].map(skill => (
              <div key={skill} className="bg-gray-100 p-4 rounded shadow hover:scale-105 transition">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50" id="projects">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Hospital Management System", desc: "A full-stack app with patient and staff modules." },
              { title: "Airplane Reservation System", desc: "Website which has easy to use UI. Search, compare, and book the best flight deals to destinations worldwide" },
              { title: "Portfolio Website", desc: "Built with React and Tailwind, showcasing my work." },
              { title: "Calculator", desc: "A simple reliable tool for quick and accurate calulation. " }
            ].map(project => (
              <div key={project.title} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-cyan-600 text-white py-6" id="contact">
        <div className="text-center">
          <p className="mb-2">Let's connect!</p>
          <p>Email: <a herf="swaroopkapte@gmail.com" className="White"></a>swaroopkapte@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/swaroop-kapte-23656928b" className="text-white underline">Swaroop Kapte</a></p>
          <p>GitHub: <a href="https://github.com/swaroop-bug" className="text-white underline">swaroop-bugs</a></p>

          <p className="mt-3">Looking forward to collaborating with you.</p>
          <p className="mt-4">© 2025 Swaroop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


export default App;
