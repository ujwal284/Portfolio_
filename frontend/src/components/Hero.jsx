function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <p className="hero-intro">Hello, I'm</p>
        <h2>Ujwal Raj Khanal</h2>
        <h3>Backend-Focused Full Stack Developer</h3>
        <p className="hero-description">
          I build clean, scalable, and user-friendly web applications using
          JavaScript, React, Node.js, Express.js, MongoDB, and Django.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">View Projects</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
          <a href="/resume.pdf" className="btn resume-btn" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
