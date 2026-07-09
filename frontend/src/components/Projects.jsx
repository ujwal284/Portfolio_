function Projects() {
  const projectList = [
    {
      title: "GharFix (Beta)",
      description:
        "A full-stack service marketplace connecting homeowners with trusted service professionals through a modern, responsive web application. Designed to simplify service booking while providing an intuitive experience for both customers and service providers.",

      highlights: [
        "Built a complete full-stack application using React, Node.js, Express.js and MongoDB",
        "Developed secure authentication, user management and service booking workflows",
        "Designed responsive user interfaces optimized for desktop and mobile devices",
        "Successfully deployed the beta version for real-world users",
      ],

      tech:
        "React.js • Node.js • Express.js • MongoDB • Tailwind CSS",

      github: "https://github.com/ujwal284",

      live: "https://ghar-fix-six.vercel.app/",
    },

    {
      title: "TaskFlow Platform",

      description:
        "A Jira-inspired full-stack project management platform designed to improve collaboration, task tracking, and workflow management through scalable software architecture.",

      highlights: [
        "Built 15+ RESTful API endpoints for user and task management",
        "Implemented JWT authentication with Role-Based Access Control (RBAC)",
        "Designed scalable backend architecture following MVC principles",
        "Integrated responsive frontend with secure backend APIs",
      ],

      tech:
        "React.js • Node.js • Express.js • MongoDB • Tailwind CSS • JWT",

      github:
        "https://github.com/ujwal284/TaskFlow-Full-Stack-Task-Management-App",

      live:
        "https://task-flow-full-stack-task-managemen.vercel.app/",
    },

    {
      title: "FitSync Application",

      description:
        "A full-stack fitness tracking application enabling users to monitor workouts, track progress, and manage personal fitness goals through an intuitive dashboard.",

      highlights: [
        "Developed authentication and secure user management",
        "Created REST APIs for workout tracking",
        "Designed MongoDB database models for efficient data storage",
        "Built responsive interfaces using React",
      ],

      tech:
        "React.js • Node.js • Express.js • MongoDB",

      github:
        "https://github.com/ujwal284/Dissertation-Project",
    },

    {
      title: "E-Commerce Store API",

      description:
        "A scalable backend solution supporting products, users, authentication, and order management for e-commerce applications.",

      highlights: [
        "Designed RESTful APIs for product and order management",
        "Implemented authentication and authorization using JWT",
        "Optimized MongoDB queries for improved performance",
        "Developed reusable middleware architecture",
      ],

      tech:
        "Node.js • Express.js • MongoDB",

      github:
        "https://github.com/ujwal284/Store-Api",
    },

    {
      title: "Task Management API",

      description:
        "A production-ready REST API providing secure task management with authentication, validation, and CRUD functionality.",

      highlights: [
        "Implemented complete CRUD operations",
        "Built secure JWT authentication system",
        "Created reusable middleware and error handling",
        "Integrated MongoDB database operations",
      ],

      tech:
        "Node.js • Express.js • MongoDB",

      github:
        "https://github.com/ujwal284/Task-Manager-Api",
    },

    {
      title: "Genbol Automation Tool",

      description:
        "A Python-based automation tool developed during my internship to collect, process, and organize notice data from multiple online sources.",

      highlights: [
        "Automated web scraping using BeautifulSoup and Requests",
        "Processed structured data efficiently",
        "Reduced manual effort through automation",
        "Improved repeatability of data collection workflows",
      ],

      tech:
        "Python • BeautifulSoup • Requests",

      github:
        "https://github.com/ujwal284",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">

        <h2>Featured Projects</h2>

        <p className="section-description">
          A collection of full-stack applications, production-ready APIs,
          automation tools, and real-world software solutions demonstrating my
          experience in modern web development, backend engineering, and product
          development.
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

              <div className="project-tech">
                {project.tech}
              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
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