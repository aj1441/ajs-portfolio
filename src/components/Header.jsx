"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../assets/art_logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <h1 className={styles.heroHeading}>AJ SMITH</h1>
            <p className={styles.tagline}>
              Developer * Leader * Marketer * Cybersecurity Advocate
            </p>
          </div>
          <img
            src={logo}
            alt="Circuit Flame Logo"
            className={styles.inlineLogo}
          />
          <div
            className={`${styles.mobileMenuButton} ${
              menuOpen ? styles.open : ""
            }`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            <button
              className={styles.closeButton}
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
              type="button"
            >
              &times;
            </button>
            <ul>
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
