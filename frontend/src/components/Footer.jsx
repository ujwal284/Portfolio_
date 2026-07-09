function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <h3>Ujwal Raj Khanal</h3>

        <p>
          Full Stack Software Engineer passionate about building scalable,
          high-performance web applications with React, Next.js, Node.js,
          Express.js, and MongoDB. Always open to collaborating on exciting
          projects and new opportunities.
        </p>

        <div className="footer-links">

          <a
            href="https://github.com/ujwal284"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ujwal-raj-khanal-3749492bb/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://ujwalrajkhanal.com.np"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </a>

          <a href="mailto:ujwalkhanal284@gmail.com">
            Email
          </a>

        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Ujwal Raj Khanal.
        </p>

      </div>
    </footer>
  );
}

export default Footer;