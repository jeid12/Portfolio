import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiPhp,
  
  DiDjango,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiWordpress,
  SiMysql,
  SiPostgresql,
  SiC,
  SiFlutter,
  SiTensorflow,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiUnity,
  SiScikitlearn,
  SiKeras,
  SiTypescript
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiC title="C" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus title="C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang title="Golang" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress title="WordPress" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp title="PHP" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase title="Firebase" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis title="Redis" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java / Spring Boot" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter title="Flutter" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango title="Django" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress title="Express.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs title="Node Ecosystem" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot title="Spring Boot" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow title="TensorFlow" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn title="Scikit-learn" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras title="Keras" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity title="Unity" />
      </Col>
    </Row>
  );
}

export default Techstack;
