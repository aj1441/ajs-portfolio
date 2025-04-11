import styles from "./About.module.css"

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
            With a passion for creating innovative solutions, I combine technical expertise with marketing insights to
            deliver projects that make a real impact. My background in cybersecurity ensures that protection is built
            into everything I create.
          </p>
          <div className={styles.skills}>
            <div className={styles.skillCategory}>
              <h3>Development</h3>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Python</li>
              </ul>
            </div>
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
  )
}

export default About

