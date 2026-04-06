import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          Extended <strong className="purple">Stack & Domains</strong>
        </h1>
        <div className="stack-badges">
          <span className="stack-badge">Artificial Intelligence</span>
          <span className="stack-badge">Machine Learning</span>
          <span className="stack-badge">Data Structures & Algorithms</span>
          <span className="stack-badge">Game Development</span>
          <span className="stack-badge">Computational Mathematics</span>
          <span className="stack-badge">Business Problem Solving</span>
          <span className="stack-badge">System Design</span>
          <span className="stack-badge">API Design</span>
          <span className="stack-badge">Cloud Deployment</span>
          <span className="stack-badge">IoT & Embedded Concepts</span>
        </div>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
