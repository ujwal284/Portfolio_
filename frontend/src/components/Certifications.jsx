import { useState } from "react";

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certifications = [
    {
      title: "AWS Cloud Fundamentals",
      issuer: "Genese Technology and Excellence Center (GTEC)",
      duration: "January 2025 – May 2025",
      description:
        "Completed the Bridging the Gap Program with hands-on exposure to AWS Cloud Fundamentals, cloud concepts, and modern technical workflows.",
      image: "/images/aws-certificate.jpg",
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2>Certifications</h2>

        <div className="projects-grid">
          {certifications.map((cert, index) => (
            <div className="project-card" key={index}>
              <h3>{cert.title}</h3>
              <p><strong>Issuer:</strong> {cert.issuer}</p>
              <p><strong>Duration:</strong> {cert.duration}</p>
              <p>{cert.description}</p>

              <div className="project-links">
                <button
                  className="certificate-btn"
                  onClick={() => setSelectedCertificate(cert.image)}
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedCertificate(null)}
            >
              ✕
            </button>
            <img
              src={selectedCertificate}
              alt="AWS Certificate"
              className="certificate-preview"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;