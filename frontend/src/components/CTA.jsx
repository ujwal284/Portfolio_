function CTA() {
  return (
    <section className="cta-section">
      <div className="container">

        <div className="cta-card">

          <h2>Let's Build Something Amazing Together</h2>

          <p>
            I'm currently open to Full Stack Software Engineer opportunities,
            remote positions, and exciting projects where I can contribute by
            building scalable web applications, modern user experiences, and
            reliable backend systems. If you're looking for a passionate
            developer who enjoys solving real-world problems, I'd love to hear
            from you.
          </p>

          <div className="cta-buttons">

            <a
              href="#contact"
              className="btn primary-btn"
            >
              Contact Me
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
              href="mailto:ujwalkhanal284@gmail.com"
              className="btn outline-btn"
            >
              Email Me
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;