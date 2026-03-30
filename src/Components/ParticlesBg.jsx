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
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 120,
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#00f0ff" },
          links: {
            enable: true,
            distance: 150,
            color: "#00f0ff",
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
          },
          size: { value: { min: 1, max: 2 } },
          opacity: { value: { min: 0.1, max: 0.3 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.4 } },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10 bg-[#0f0f0f]"
    />
  );
}
