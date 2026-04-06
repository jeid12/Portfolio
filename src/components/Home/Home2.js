import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/jd.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I build practical, high-impact digital products and I am constantly learning.
              <br />
              <br />I work confidently with
              <i>
                <b className="purple"> C++, JavaScript, Java, Dart/Flutter, and Python. </b>
              </i>
              <br />
              <br />
              My current exploration includes &nbsp;
              <i>
                <b className="purple">AI, Machine Learning, Web Development, and Game Development</b>
                , as well as
                <b className="purple">
                  {" "}business-oriented problem solving.
                </b>
              </i>
              <br />
              <br />
              I am also a <b className="purple">Rwanda computing coach</b>, deeply interested in
              <b className="purple"> mathematical thinking and computational science</b>.
              <br />
              <br />
              Whenever possible, I apply this passion to products built with
              <b className="purple"> Node.js</b>, <b className="purple">Django</b>,
              <b className="purple"> Flutter</b>, <b className="purple">Spring Boot</b>, and
              <i>
                <b className="purple">
                  {" "}
                  modern JavaScript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt
              tiltMaxAngleX={18}
              tiltMaxAngleY={18}
              perspective={1200}
              glareEnable={true}
              glareMaxOpacity={0.28}
              scale={1.03}
              className="avatar-3d-shell"
            >
              <img src={myImg} className="img-fluid" alt="NIYOKWIZERA profile" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jeid12"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/brojeid"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/brojeid/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
