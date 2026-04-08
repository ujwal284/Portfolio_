function Projects() {
  const projectList = [
    {
      title: "Task Flow",
      description:
        "A Jira-inspired full-stack task management platform with strong backend architecture, JWT authentication, role-based access control, admin APIs, and task workflow management.",
      tech: "Node.js, Express.js, MongoDB, React.js, Tailwind CSS, JWT",
      github: "https://github.com/ujwal284/TaskFlow-Full-Stack-Task-Management-App",
      live: "https://task-flow-full-stack-task-managemen.vercel.app/",
    },
    {
      title: "Fit Sync",
      description:
        "A MERN stack fitness tracking application with user authentication, workout tracking, and personalized dashboards.",
      tech: "React, Node.js, Express.js, MongoDB",
      github: "https://github.com/ujwal284/Dissertation-Project",
    },
    {
      title: "Task Manager API",
      description:
        "A RESTful backend API for task management with CRUD operations, authentication, and database integration.",
      tech: "Node.js, Express.js, MongoDB",
      github: "https://github.com/ujwal284/Task-Manager-Api",
    },
    {
      title: "Store API",
      description:
        "An e-commerce backend API handling products, authentication, and order-related functionalities.",
      tech: "Node.js, Express.js, MongoDB",
      github: "https://github.com/ujwal284/Store-Api",
    },
    {
      title: "Genbol",
      description:
        "A web scraping tool built with Python and BeautifulSoup to fetch and manage notices dynamically.",
      tech: "Python, BeautifulSoup, Requests",
      github: "https://github.com/ujwal284",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  View Code
                </a>

                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;