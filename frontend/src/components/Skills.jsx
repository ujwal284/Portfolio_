function Skills() {
  const categories = [
    {
      title: "Frontend",
      items: [
        "Next.js",
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },

    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Django",
        "REST APIs",
        "JWT Authentication",
        "Role-Based Access Control (RBAC)",
      ],
    },

    {
      title: "Databases",
      items: [
        "MongoDB",
        "PostgreSQL",
        "Supabase",
        "Database Design",
      ],
    },

    {
      title: "Programming Languages",
      items: [
        "JavaScript",
        "Python",
      ],
    },

    {
      title: "Tools & Platforms",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "Vercel",
        "Render",
        "MongoDB Atlas",
      ],
    },

    {
      title: "Core Concepts",
      items: [
        "MVC Architecture",
        "API Integration",
        "Authentication",
        "Authorization",
        "Responsive Design",
        "Deployment",
        "Debugging",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">

        <h2>Technical Skills</h2>

        <p className="section-description">
          A strong foundation in modern full-stack development, backend
          engineering, database design, and deployment technologies used to
          build scalable, secure, and high-performance web applications.
        </p>

        <div className="expertise-grid">

          {categories.map((category, index) => (
            <div className="expertise-card" key={index}>

              <h3>{category.title}</h3>

              <ul>
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;