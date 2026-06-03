import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -10 },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 40, density: { enable: true, area: 900 } },
          color: { value: "#00f0ff" },
          links: {
            enable: true,
            distance: 140,
            color: "#00f0ff",
            opacity: 0.08,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
          },
          size: { value: { min: 1, max: 2 } },
          opacity: { value: { min: 0.05, max: 0.2 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: { distance: 120, links: { opacity: 0.3 } },
          },
        },
        detectRetina: false,
      }}
    />
  );
}
