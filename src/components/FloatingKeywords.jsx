import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const FloatingKeywords = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const keywords = [
    "Resourceful", "Perceptive", "Driven", "Creative", "Analytical", "Agile"
  ];

  const manualParticles = keywords.map((word, index) => ({
    position: {
      x: 10 + index * 15, // spread out horizontally
      y: 10 + (index % 3) * 30, // slight vertical offset pattern
    },
    options: {
      shape: {
        type: "char",
        character: {
          value: word,
          font: "Verdana",
          weight: "bold",
          fill: true,
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
        speed: 1.5,
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
    <div className={styles.FloatingKeywords}>
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
    </div>
  );
};

export default FloatingKeywords;
