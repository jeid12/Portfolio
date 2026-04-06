import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "AI Explorer",
          "Machine Learning Explorer",
          "Web Developer",
          "Game Development Learner",
          "Business Problem Solver",
          "Rwanda Computing Coach",
          "Math Enthusiast",
          "Computational Science Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
