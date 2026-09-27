const projects = [
  {
    title: "MovieGraph",
    description:
      "A full-stack movie management and recommendation application with CRUD operations and graph-based relationships between movies, persons and genres.",
    technologies: "Java • Spring Boot • React • REST APIs • Graph Database",
    github: "https://github.com/Akhila34567/MovieGraph-Backend",
    demo: "https://movie-graph-frontend.vercel.app/",
    api: "https://moviegraph-backend.onrender.com/swagger-ui/index.html"
  },

  {
    title: "University Management System",
    description:
      "A Java application for managing university information, including student and academic data, with database connectivity and CRUD operations.",
    technologies: "Java • JDBC • SQL",
    github: "#",
    demo: "#",
    api: "#"
  },

  {
    title: "Bone Fracture Detection System",
    description:
      "A machine learning application that analyzes X-ray images and uses a CNN model to identify possible bone fractures.",
    technologies: "CNN • Image Processing • Machine Learning",
    github: "#",
    demo: "#",
    api: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="section-title">
        <p>What I've Built</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <div className="project-label">
              PROJECT
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies}
            </div>

            <div className="project-links">

              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}

              {project.api !== "#" && (
                <a
                  href={project.api}
                  target="_blank"
                  rel="noreferrer"
                >
                  Swagger
                </a>
              )}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;