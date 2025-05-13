import styles from "./About.module.css";
import SkillCard from "../components/SkillCard";
import skills from "../data/logos"; // Adjust the path as necessary
// src/data/logos.jsx

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h2>About Me</h2>
          <p className={styles.highlight}>
            Software development, marketing, AI, and project leadership are my
            tools for transformation. I build not just code, but strategies and
            experiences that engage, protect, and INSPIRE!
          </p>
          <p>
            Bringing over a decade of cross-functional experience in
            administration, supply chain logistics, program oversight, and
            marketing, I began formally pivoting into the tech space in 2018. My
            passion for cybersecurity and digital privacy stems from firsthand
            experience, fueling a deep commitment to staying at the forefront of
            evolving technologies.
          </p>
          <br />
          <p>
            I don't just solve problems — I create new possibilities. With sharp
            foresight, multidimensional experience, and a relentless drive, I
            chart paths where others see roadblocks. My strategic,
            unconventional approach allows me to anticipate challenges, design
            bold solutions, and drive lasting impact. Bridging operational
            complexity with technical innovation, I bring a decisive,
            future-focused mindset and dependable execution to every development
            team I join.
          </p>
          <div className={styles.skills}>
            <div className={styles.skillCategory}>
              <h3>Marketing</h3>
              <ul>
                <li>SEO</li>
                <li>Content Strategy</li>
                <li>Analytics</li>
                <li>Social Media</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Leadership</h3>
              <ul>
                <li>Project Management</li>
                <li>Team Building</li>
                <li>Strategic Planning</li>
                <li>Client Relations</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default About;
