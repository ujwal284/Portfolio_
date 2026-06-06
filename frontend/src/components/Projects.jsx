function Projects() {
  const projectList = [
    {
      title: "TaskFlow Platform",
      description:
        "A Jira-inspired task management platform designed to streamline team collaboration, task tracking, and workflow management through a scalable full-stack architecture.",
      highlights: [
        "Built 15+ RESTful API endpoints for task and user management",
        "Implemented secure JWT authentication and role-based access control",
        "Designed scalable backend architecture using MVC principles",
      ],
      tech: "Node.js, Express.js, MongoDB, React.js, Tailwind CSS, JWT",
      github:
        "https://github.com/ujwal284/TaskFlow-Full-Stack-Task-Management-App",
      live:
        "https://task-flow-full-stack-task-managemen.vercel.app/",
    },

    {
      title: "FitSync Application",
      description:
        "A full-stack fitness tracking application that enables users to monitor workouts, manage fitness goals, and visualize personal progress through an intuitive dashboard.",
      highlights: [
        "Developed secure authentication and user management",
        "Designed APIs for workout tracking and data management",
        "Created structured database models for efficient storage",
      ],
      tech: "React.js, Node.js, Express.js, MongoDB",
      github: "https://github.com/ujwal284/Dissertation-Project",
    },

    {
      title: "Task Management API",
      description:
        "A production-ready RESTful API providing secure task management functionality with authentication, validation, and optimized database operations.",
      highlights: [
        "Implemented complete CRUD functionality",
        "Integrated JWT authentication and protected routes",
        "Developed middleware-based error handling architecture",
      ],
      tech: "Node.js, Express.js, MongoDB",
      github: "https://github.com/ujwal284/Task-Manager-Api",
    },

    {
      title: "E-Commerce Backend API",
      description:
        "A backend solution for e-commerce applications handling products, users, authentication, and order processing through scalable API design.",
      highlights: [
        "Designed product, user, and order management APIs",
        "Implemented authentication and authorization systems",
        "Optimized database queries for improved performance",
      ],
      tech: "Node.js, Express.js, MongoDB",
      github: "https://github.com/ujwal284/Store-Api",
    },

    {
      title: "Genbol Automation Tool",
      description:
        "An automated web scraping solution developed to collect, process, and manage notice data efficiently from online sources.",
      highlights: [
        "Built data extraction workflows using BeautifulSoup",
        "Automated notice collection and processing",
        "Handled dynamic website content retrieval and parsing",
      ],
      tech: "Python, BeautifulSoup, Requests",
      github: "https://github.com/ujwal284",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Work</h2>

        <p className="section-description">
          Selected projects showcasing expertise in full-stack development,
          backend architecture, API development, automation, and scalable
          software solutions.
        </p>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <span>{project.tech}</span>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
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