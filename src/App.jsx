import Header from "./components/Header"
import About from "./components/About"
import SkillCard from "./components/SkillCard"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css"




function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const keywords = [
    "Resourceful", "Perceptive", "Driven", "Creative", "Relentless", "Agile", "Strategic", "Innovative", "Curious", "Tenacious", "Focused", "Inventive", "Collaborative",
  ];

  function getEdgeBiasedPosition() {
    const edgeBias = () => (Math.random() < 0.5
      ? Math.random() * 20        // top edge 0–20%
      : 80 + Math.random() * 20   // bottom edge 80–100%
    );
  
    return {
      x: edgeBias(),
      y: Math.random() * 40, // keep within top 40% vertically
    };
  }

  const manualParticles = keywords.map((word) => ({
    position: getEdgeBiasedPosition(),
    options: {
      shape: {
        type: "char",
        character: {
          value: word,
          font: "Verdana",
          weight: "bold",
          fill: false,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
        },
        modes: {
          repulse: {
            distance: 50,
            duration: 0.4,
          },
        },
      },
      color: {
        value: "#ce2535",
      },
      size: {
        value: 16,
      },
      move: {
        enable: true,
        speed: Math.random() * 2 + 1.5, // Speed between 1.5 and 3.5
        direction: "none",
        outModes: {
          default: "bounce",
        },
        random: true,
        straight: false,
      },
    },
  }));
  

  const particlesOptions = {
    fullScreen: false,
    background: {
      color: { value: "#0a0a0f" },
    },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: { value: 0 }, // no default particles
    },
    manualParticles,
  };

  return (
    <div className="App">
      <Header />
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      <main className="container">
      {/* <Hero /> */}
        <About />
        <SkillCard />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AJ Smith. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

