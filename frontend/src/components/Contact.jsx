function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <h2>Let's Connect</h2>

        <p className="contact-text">
          I'm currently open to Full Stack Software Engineer opportunities,
          remote roles, and exciting collaborations. Whether you're a recruiter,
          hiring manager, founder, or fellow developer, I'd be happy to connect
          and discuss how I can contribute to your team or project.
        </p>

        <form
          action="https://formsubmit.co/ujwalkhanal284@gmail.com"
          method="POST"
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Tell me about your opportunity or project..."
            required
          ></textarea>

          {/* Hidden Fields */}

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact"
          />

          <button
            type="submit"
            className="btn primary-btn"
          >
            Send Message
          </button>

        </form>

        <div className="contact-links">

          <a href="mailto:ujwalkhanal284@gmail.com">
            📧 Email
          </a>

          <a
            href="https://www.linkedin.com/in/ujwal-raj-khanal-3749492bb/"
            target="_blank"
            rel="noreferrer"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/ujwal284"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>

          <a
            href="https://ujwalrajkhanal.com.np"
            target="_blank"
            rel="noreferrer"
          >
            🌐 Portfolio
          </a>

          <a
            href="https://wa.me/9779847399383"
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;