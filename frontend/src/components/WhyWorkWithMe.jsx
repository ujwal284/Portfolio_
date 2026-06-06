function WhyWorkWithMe() {
  const reasons = [
    {
      title: "Business-Focused Solutions",
      description:
        "I build websites and applications that solve real business problems, improve online presence, and support growth.",
    },
    {
      title: "Modern Full-Stack Development",
      description:
        "Using modern technologies such as React, Node.js, Express.js, MongoDB, PostgreSQL, and Django.",
    },
    {
      title: "Scalable Architecture",
      description:
        "Applications are designed with maintainability, security, and future scalability in mind.",
    },
    {
      title: "Clear Communication",
      description:
        "Regular updates, transparent progress reporting, and collaborative development throughout the project.",
    },
    {
      title: "Performance & Reliability",
      description:
        "Focus on optimized performance, clean code practices, and reliable user experiences.",
    },
    {
      title: "Long-Term Support",
      description:
        "Support for maintenance, improvements, bug fixes, and future feature development.",
    },
  ];

  return (
    <section id="why-work-with-me" className="why-work">
      <div className="container">
        <h2>Why Work With Me</h2>

        <p className="section-description">
          Delivering professional web solutions with a focus on quality,
          performance, and long-term business value.
        </p>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWorkWithMe;