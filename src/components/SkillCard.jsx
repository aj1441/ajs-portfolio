// src/components/SkillCard.jsx
import PropTypes from "prop-types";
import styles from "./SkillCard.module.css";
import skills from "../data/logos"; // path to your categorized skills array

const categories = [
  "Languages & Syntax",
  "Frameworks & Libraries",
  "Tools & Platforms",
  "AI & Design",
];

const SkillCard = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>Development</h2>
      <div className={styles.skills}>
        {categories.map((category) => (
          <div key={category} className={styles.skillIconCategory}>
            <h3>{category}</h3>
            <ul className={styles.skillIcons}>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <li
                    key={index}
                    className={
                      styles.skillCard
                    }
                  >
                    <img src={skill.image} alt={skill.alt} title={skill.title} width="64" height="64" />
                    <p>{skill.title}</p>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillCard;


