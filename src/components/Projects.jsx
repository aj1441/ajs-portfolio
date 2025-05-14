import styles from "./Projects.module.css";
import ticTacToe from '../assets/tic-tac-toe.png';
import horoscope from '../assets/newHoroscopePage.png';
import focusFox from '../assets/focus-fox.png';
// import countriesApi from '../assets/countries-api.png';
import productApp from '../assets/product_mng_app.png'

const Projects = () => {
  const projects = [
    // {
    //   id: 1,
    //   title: "Countries API App",
    //   image: countriesApi,
    //   description:
    //     "A responsive web app that allows users to search for countries and view their details using a REST API.",
    //   technologies: ["React", "Node.js", "PostgreSQL", "Netlify", "Render"],
    //   category: "Full-stack Development",
    //   link: "https://countriesapiversion5.netlify.app/",
    // },
        {
      id: 1,
      title: "Product Management App",
      image: productApp,
      description:
        "This App allows users to view and submit feed back on a current product, with user-centered responsive design.",
      technologies: ["React", "Node.js", "PostgreSQL", "Netlify", "Render"],
      category: "Full-stack Development",
      link: "https://aj-product-management-app.netlify.app/",
    },
    {
      id: 2,
      title: "Tic Tac Toe",
      image: ticTacToe,
      description:
        "Created from Figma Design to spec, for an interactive Tic-Tac-Toe Game for player vs CPU.",
      technologies: ["JavaScript", "Html", "CSS"],
      category: "Frontend Development",
      link: "https://aj1441.github.io/tic-tac-toe-against-cpu/",
    },
    {
      id: 3,
      title: "Focus Fox",
      image: focusFox,
      description: "A friendly AI-powered prodctivity tool that helps users stay focused and organized, created as part of a team for the Girl Develop It Hackathon. Awarded 'Crowd Favorite'",
      technologies: ["React", "JavaScript", "CSS"],
      category: "Hackathon/Development",
      link: "https://youtu.be/sR8jJ10IKKQ",
    },
    {
      id: 4,
      title: "Horoscopes",
      image: horoscope,
      description: "AI powered responsive web page with HTML, CSS, and JavaScript, RestAPI that enables users to select their sun sign and view a personalized horoscope.",
      technologies: ["HTML", "CSS", "JavaScript", "ChatGPT"],
      category: "Frontend Development",
      link: "https://aj-celestial-insights.netlify.app/",
    },
    
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <span className={styles.category}>{project.category}</span>
              <h3>{project.title}</h3>
              <img src={project.image} />
            </div>
            <p>{project.description}</p>
            <div className={styles.technologies}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              <a href={project.link} target="_blank" className={styles.viewProject}>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
