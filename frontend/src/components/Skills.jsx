function Skills() {
  const categories = [
    {
      title: "Frontend",
      items: ["Next.js","React.js", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "Django"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools & Workflow",
      items: ["Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Expertise</h2>

        <p className="section-description">
          Technologies and tools used to deliver scalable and maintainable
          digital solutions.
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