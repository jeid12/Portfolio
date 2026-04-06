import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Tilt from "react-parallax-tilt";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1000}
      transitionSpeed={1200}
      glareEnable={true}
      glareMaxOpacity={0.08}
      glareColor="#ffffff"
      glarePosition="all"
    >
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>
            {props.title}
            {props.isFeatured && <span className="project-chip">Featured</span>}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

          {(props.language || props.stars >= 0) && (
            <div className="project-meta">
              {props.language && <span className="project-chip">{props.language}</span>}
              {props.stars >= 0 && <span className="project-chip">{props.stars} stars</span>}
            </div>
          )}

          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" rel="noreferrer">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
        </Card.Body>
      </Card>
    </Tilt>
  );
}
export default ProjectCards;
