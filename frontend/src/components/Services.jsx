function Services() {
  const services = [
    {
      title: "Business Websites",
      description:
        "Professional, responsive websites designed to strengthen your online presence and attract potential customers.",
    },
    {
      title: "Custom Web Applications",
      description:
        "Tailored web solutions built around your business processes, workflows, and operational requirements.",
    },
    {
      title: "Backend Development",
      description:
        "Scalable APIs, authentication systems, database architecture, and server-side application development.",
    },
    {
      title: "API Integration",
      description:
        "Integration of third-party services, payment gateways, automation tools, and external platforms.",
    },
    {
      title: "Database Design",
      description:
        "Efficient database architecture using MongoDB and PostgreSQL for performance and scalability.",
    },
    {
      title: "Website Maintenance",
      description:
        "Ongoing support, bug fixes, performance optimization, and feature enhancements.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Services</h2>

        <p className="section-description">
          Helping businesses and professionals build reliable digital solutions.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;