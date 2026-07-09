function WhyHireMe() {
  const reasons = [
    {
      title: "Full Stack Development",
      description:
        "Experienced in building complete web applications from responsive frontend interfaces to secure backend APIs, databases, and production deployments.",
    },

    {
      title: "Real-World Experience",
      description:
        "Hands-on experience through a professional software development internship, leadership in IT operations, and building production-ready applications from concept to deployment.",
    },

    {
      title: "Problem Solving",
      description:
        "I enjoy solving complex technical challenges by writing clean, maintainable, and scalable code that delivers practical business value.",
    },

    {
      title: "Modern Technology Stack",
      description:
        "Proficient with React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Django, Git, and modern software development workflows.",
    },

    {
      title: "Continuous Learning",
      description:
        "Technology evolves rapidly, and I continuously improve my skills by building real-world projects, exploring new tools, and staying current with industry best practices.",
    },

    {
      title: "Collaborative Mindset",
      description:
        "Comfortable working in Agile teams, collaborating with developers, communicating effectively, and contributing throughout the software development lifecycle.",
    },
  ];

  return (
    <section id="why-hire-me" className="why-work">
      <div className="container">

        <h2>Why Hire Me</h2>

        <p className="section-description">
          Beyond writing code, I focus on delivering reliable software,
          collaborating effectively, and continuously improving my skills to
          build products that create real value.
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

export default WhyHireMe;