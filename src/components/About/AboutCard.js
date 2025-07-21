import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">NIYOKWIZERA JEAN D AMOUR </span>
            from <span className="purple"> KIGALI, Rwanda.</span>
            <br />
            I am currently student at University Of Rwanda (CST).
            <br />
            I am studying Computer and software Engineering in final year.
            <br />
            I have also Finished software engineering spcifically in Backend development at ALX
            <br />
            <br />
              I finished Eshuri Java full stack Traing and obtained certipot java certificate
<br/>
              <br/>
              I did my 3 months Enternershipt At Rwanda TVET Board(RTB)

              
<br/>
              <br/>
              I am  Rwanda informatic Olympiad coach. Strongly thinking and problema solving
              <br/>
              
              
            Apart from coding, some other activities that I love to do!
              
              
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
              <ImPointRight /> Reading physics lows
            </li>
              <li className="about-activity">
              <ImPointRight /> solving competitive programing problems
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
