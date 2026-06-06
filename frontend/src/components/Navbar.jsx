import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <h1 className="logo">Ujwal.</h1>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#hero" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Portfolio
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Expertise
            </a>
          </li>

          <li>
            <a href="#experience" onClick={() => setIsOpen(false)}>
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;