function Projects() {
  const projectList = [
    {
      title: "Task Flow",
      description:
        "Designed and developed a scalable Jira-inspired task management platform with a strong backend architecture. Implemented secure JWT-based authentication, role-based access control (RBAC), and modular REST APIs to handle task workflows, user roles, and admin operations efficiently.",
      highlights: [
        "Built 15+ RESTful API endpoints for task and user management",
        "Implemented role-based authorization (Admin/User)",
        "Structured backend using MVC architecture for scalability",
      ],
      tech: "Node.js, Express.js, MongoDB, React.js, Tailwind CSS, JWT",
      github: "https://github.com/ujwal284/TaskFlow-Full-Stack-Task-Management-App",
      live: "https://task-flow-full-stack-task-managemen.vercel.app/",
    },
    {
      title: "Fit Sync",
      description:
        "Developed a full-stack fitness tracking application with secure user authentication and personalized dashboards. Focused on backend data handling, user activity tracking, and efficient API design.",
      highlights: [
        "Designed APIs for workout tracking and user data management",
        "Implemented authentication and session handling",
        "Built structured database models for scalable data storage",
      ],
      tech: "React, Node.js, Express.js, MongoDB",
      github: "https://github.com/ujwal284/Dissertation-Project",
    },
    {
      title: "Task Manager API",
      description:
        "Built a production-ready RESTful API for task management with clean architecture and secure authentication. Focused on writing maintainable backend logic and efficient database operations.",
      highlights: [
        "Implemented full CRUD operations with validation",
        "Integrated JWT authentication and protected routes",
        "Handled error management and middleware structure",
      ],
      tech: "Node.js, Express.js, MongoDB",
      github: "https://github.com/ujwal284/Task-Manager-Api",
    },
    {
      title: "Store API",
      description:
        "Developed an e-commerce backend system handling product management, user authentication, and order processing with scalable API design.",
      highlights: [
        "Designed APIs for products, users, and orders",
        "Implemented authentication and authorization logic",
        "Optimized database queries for better performance",
      ],
      tech: "Node.js, Express.js, MongoDB",
      github: "https://github.com/ujwal284/Store-Api",
    },
    {
      title: "Genbol (Web Scraper)",
      description:
        "Built a web scraping tool to extract and manage dynamic notice data from websites using Python. Focused on automation and data extraction reliability.",
      highlights: [
        "Scraped and parsed structured data using BeautifulSoup",
        "Handled HTTP requests and response parsing",
        "Automated data collection workflow",
      ],
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

              <ul>
                {project.highlights.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

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