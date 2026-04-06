import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">NIYOKWIZERA JEAN D AMOUR </span>
            from <span className="purple">Kigali, Rwanda.</span>
            <br />
            I am a final-year Computer and Software Engineering student at the University of Rwanda (CST).
            <br />
            I also completed software engineering training with a backend specialization at ALX.
            <br />
            I completed Eshuri Java Full-Stack training and earned a Certiport Java certificate.
            <br />
            <br />
            I did my internship at Rwanda TVET Board (RTB), and I currently serve as a
            <span className="purple"> Rwanda computing coach</span>.
            <br />
            <br />
            I am actively exploring <span className="purple">AI, Machine Learning, Web Development,
            Game Development, and Business Problem Solving</span>.
            <br />
            I am also deeply interested in <span className="purple">mathematics and mathematically driven computational science</span>.
            <br />
            <br />
            Apart from coding, here are a few things I also enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Math problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading physics laws
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving competitive programming problems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work for the future for the better me and you"{" "}
          </p>
          <footer className="blockquote-footer">Niyokwizera Jean D Amour</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
