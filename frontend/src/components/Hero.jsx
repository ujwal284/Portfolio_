function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">

        <p className="hero-intro">
          Full Stack Web Developer
        </p>

        <h2>Ujwal Raj Khanal</h2>

        <h3>
          Building Modern Websites, Web Applications & Scalable Digital Solutions
        </h3>

        <p className="hero-description">
          I help businesses, startups, and professionals establish a strong
          online presence through custom websites, web applications, backend
          systems, and automation solutions built for performance, security,
          and long-term growth.
        </p>

        <div className="hero-stats">
          <div>
            <h4>25+</h4>
            <span>Projects Built</span>
          </div>

          <div>
            <h4>15+</h4>
            <span>Technologies</span>
          </div>

          {/* <div>
            <h4>1</h4>
            <span>Professional Internship</span>
          </div> */}
        </div>

        <div className="hero-highlights">
          <span>✓ Business Websites</span>
          <span>✓ Web Applications</span>
          <span>✓ Backend Development</span>
          <span>✓ API Integrations</span>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Portfolio
          </a>

          <a href="#contact" className="btn secondary-btn">
            Request a Project
          </a>

          {/* <a
            href="/resume.pdf"
            className="btn resume-btn"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;