import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";

import chatify from "../../Assets/Projects/chatify.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Excellent Servant Academy "
              description="This A website for private candidate [candidant Libre] where i developmed its we site  and build it .
              So every one wishes to study Rwandan Secondary program can go to this site. "
              
              demoLink="https://www.livetoserves.com"
            />
          </Col>

          
          

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Lenny Today News Update"
              description="This project is a website where I developmed its we site  and build it  with react and fake serves json and i provide update"
             
              demoLink="https://mood.livetoserves.com"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="MOOD MATCH"
              description="This the project done on matching mood with the music recomation I used pre trained cnn model. and this  web  is abble to detect
               your mood basing on your face then recomand the music. or story to ready"
              ghLink="https://github.com/jeid12/Alx-portfolio"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
