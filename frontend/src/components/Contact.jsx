function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Let's Discuss Your Project</h2>
        <p className="contact-text">
          Looking for a website, web application, backend solution, or technical support?
          Let's discuss your requirements and explore the best solution for your project.
        </p>

        <form
          action="https://formsubmit.co/ujwalkhanal284@gmail.com"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message" required></textarea>

          {/* Optional hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <button type="submit" className="btn primary-btn">Send Message</button>
        </form>

        <div className="contact-links">
          <a href="mailto:ujwalkhanal284@gmail.com">Email Me</a>
          <a
            href="https://www.linkedin.com/in/ujwal-raj-khanal-3749492bb/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/9847399383"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="https://github.com/ujwal284"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
