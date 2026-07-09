function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">

        <p className="hero-intro">
          👋 Hello, I'm
        </p>

        <h1>Ujwal Raj Khanal</h1>

        <h2>
          Full Stack Software Engineer
        </h2>

        <h3>
          Building Modern, Scalable & User-Centric Web Applications with
          React, Next.js, Node.js & MongoDB
        </h3>

        <p className="hero-description">
          I'm a passionate Full Stack Software Engineer from Nepal with
          experience developing production-ready web applications,
          REST APIs, authentication systems, and modern user interfaces.
          I enjoy transforming ideas into reliable digital products that
          solve real business problems while delivering clean, maintainable,
          and scalable solutions.
        </p>

        <div className="hero-stats">

          <div>
            <h4>20+</h4>
            <span>Projects Completed</span>
          </div>

          <div>
            <h4>1</h4>
            <span>Professional Internship</span>
          </div>

          <div>
            <h4>1</h4>
            <span>IT Leadership Role</span>
          </div>

        </div>

        <div className="hero-highlights">

          <span>⚡ Full Stack Development</span>

          <span>⚡ Next.js & React</span>

          <span>⚡ REST API Development</span>

          <span>⚡ Responsive UI</span>

          <span>⚡ Database Design</span>

          <span>⚡ Problem Solver</span>

        </div>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn primary-btn"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn secondary-btn"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="btn outline-btn"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;