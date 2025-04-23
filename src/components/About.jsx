import styles from "./About.module.css"
import SkillCard from "../components/SkillCard"
import skills from "../data/logos" // Adjust the path as necessary
// src/data/logos.jsx


const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h2>About Me</h2>
          <p className={styles.highlight}>
            Software development, marketing, AI, and project leadership are my tools for transformation. I build not
            just code, but strategies and experiences that engage, protect, and INSPIRE!
          </p>
          <p>
          Bringing over a decade of cross-functional experience in administration, supply chain logistics, program oversight, and marketing, I began formally pivoting into the tech space in 2018. My interest in cybersecurity and digital privacy stems from firsthand encounters, motivating me to stay deeply engaged with evolving best practices. I'm consistently expanding my knowledge of AI integration for task automation, security enhancement, and data-driven decision-making. As someone who understands both operational complexity and technical growth, I offer a unique perspective and dependable versatility to any development team.
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
          <div className={styles.skillIconCategory}>
              <h3>Development</h3>
              <ul className={styles.skillIcons}>
              {skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                image={skill.image}
                alt={skill.alt}
                className={skill.title === "Express.JS" ? styles.lightBackground : ""}
              />
            ))}
              </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About

