import "./Project.scss";

const Project = () => {
  const projects = [
    {
      title: "Flight Ticket Booking",
      description:
        "A responsive flight ticket booking web application where users can search flights, select seats, enter passenger details, make payments, and view booking confirmation.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      github: "https://github.com/gowllaramu18/Flight-Ticket-Booking",
      live: "#",
    },
    {
      title: "ATM Login Project",
      description:
        "A simple ATM login application developed using HTML, CSS, and JavaScript. Users can log in securely and interact with basic ATM operations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/gowllaramu18/ATM-Login-Project",
      live: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <p className="projects-subtitle">
          Some of the projects I have developed using my technical skills.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="technologies">
                {project.technologies.map((technology, techIndex) => (
                  <span key={techIndex}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;