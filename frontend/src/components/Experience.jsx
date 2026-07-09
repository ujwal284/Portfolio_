function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>

        <p className="section-description">
          Professional experience spanning full-stack software development,
          backend engineering, IT infrastructure management, and delivering
          technology solutions for real-world business needs.
        </p>

        {/* StockArts Securities */}

        <div className="experience-card">

          <div className="experience-header">

            <div>
              <h3>IT Head</h3>

              <h4>StockArts Securities</h4>

              <p className="experience-duration">
                January 2026 – Present
              </p>
            </div>

            <span className="experience-badge">
              Full Time
            </span>

          </div>

          <div className="experience-location">
            📍 Kathmandu, Nepal
          </div>

          <div className="experience-tech">
            <span>Networking</span>
            <span>System Administration</span>
            <span>IT Infrastructure</span>
            <span>Windows Server</span>
            <span>Hardware & Software</span>
          </div>

          <ul className="experience-list">
            <li>
              Manage the organization's IT infrastructure, networking equipment,
              and day-to-day technical operations.
            </li>

            <li>
              Configure, maintain, and troubleshoot computers, routers,
              switches, printers, and office networking systems.
            </li>

            <li>
              Provide technical support to employees while ensuring system
              reliability, security, and business continuity.
            </li>

            <li>
              Coordinate with vendors for hardware procurement, maintenance,
              and infrastructure upgrades.
            </li>

            <li>
              Implement routine system maintenance, backups, and preventive
              measures to minimize downtime.
            </li>

          </ul>

        </div>

        {/* Genese */}

        <div className="experience-card">

          <div className="experience-header">

            <div>
              <h3>Software Developer Intern</h3>

              <h4>Genese Solution Pvt. Ltd.</h4>

              <p className="experience-duration">
                June 2025 – September 2025
              </p>
            </div>

            <span className="experience-badge">
              Internship
            </span>

          </div>

          <div className="experience-location">
            📍 Lalitpur, Nepal
          </div>

          <div className="experience-tech">
            <span>Django</span>
            <span>Python</span>
            <span>PostgreSQL</span>
            <span>BeautifulSoup</span>
            <span>REST APIs</span>
            <span>Git</span>
          </div>

          <ul className="experience-list">
            <li>
              Contributed to the development and maintenance of production web
              applications using Python and Django.
            </li>

            <li>
              Worked on Austin Intelligence, helping improve backend modules,
              API workflows, and website technology scanning capabilities.
            </li>

            <li>
              Designed and developed <strong>Genbol</strong>, an automation tool
              that extracts and organizes notices using Python,
              BeautifulSoup, and Requests.
            </li>

            <li>
              Collaborated with developers using Git-based workflows,
              participated in testing, debugging, and code reviews to maintain
              software quality.
            </li>

            <li>
              Gained practical experience in REST API development, database
              management, Agile development practices, and software deployment
              workflows.
            </li>

          </ul>

        </div>

      </div>
    </section>
  );
}

export default Experience;