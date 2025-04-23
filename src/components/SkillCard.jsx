// src/components/SkillCard.jsx
import PropTypes from "prop-types"
import styles from "./SkillCard.module.css"

const SkillCard = ({ title, image, alt }) => {
  return (
    <li className={styles.skillCard}>
      
        <img src={image} alt={alt}  />
      
        <p>{title}</p>
      
    </li>
  )
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string
}

export default SkillCard
