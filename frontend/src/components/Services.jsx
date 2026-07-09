function Expertise() {
  const expertise = [
    {
      title: "Full Stack Development",
      description:
        "Building modern, scalable web applications using React, Next.js, Node.js, Express.js, and MongoDB with clean architecture and maintainable code.",
    },
    {
      title: "Frontend Development",
      description:
        "Developing responsive, accessible, and high-performance user interfaces using React, Next.js, Tailwind CSS, HTML5, and JavaScript.",
    },
    {
      title: "Backend Engineering",
      description:
        "Designing secure REST APIs, authentication systems, business logic, and scalable server-side applications using Node.js and Express.js.",
    },
    {
      title: "Database Design",
      description:
        "Designing efficient MongoDB and PostgreSQL databases with optimized schemas, relationships, and query performance.",
    },
    {
      title: "API Integration",
      description:
        "Integrating third-party APIs, authentication providers, payment gateways, cloud services, and external business systems.",
    },
    {
      title: "Deployment & Maintenance",
      description:
        "Deploying applications on Vercel and Render while maintaining performance, security, monitoring, and continuous improvements.",
    },
  ];

  return (
    <section id="expertise" className="services">
      <div className="container">

        <h2>Core Expertise</h2>

        <p className="section-description">
          My technical expertise covers the complete software development
          lifecycle—from designing intuitive user interfaces to building secure
          backend systems and deploying production-ready applications.
        </p>

        <div className="services-grid">
          {expertise.map((item, index) => (
            <div className="service-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Expertise;