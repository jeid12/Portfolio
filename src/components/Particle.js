import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1100,
            },
          },
          color: {
            value: ["#ffffff", "#bfa4ff", "#88f3ff"],
          },
          line_linked: {
            enable: true,
            distance: 170,
            opacity: 0.1,
            color: "#8d72f4",
          },
          move: {
            direction: "none",
            speed: 0.4,
            out_mode: "out",
          },
          size: {
            value: 2,
            random: true,
          },
          opacity: {
            value: 0.35,
            anim: {
              enable: true,
              speed: 0.7,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 110,
              duration: 0.4,
            },
            push: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
