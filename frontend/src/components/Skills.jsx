function Skills() {
  const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Django",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Postman"
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
