import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/NIYOKWIZERA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", marginBottom: "24px" }}>
          <Col md={10}>
            <Card className="resume-intro-card">
              <Card.Body>
                <h2 className="purple" style={{ marginBottom: "10px" }}>
                  NIYOKWIZERA Jean D Amour
                </h2>
                <p style={{ marginBottom: "10px" }}>
                  Software Developer and Rwanda Computing Coach exploring AI, Machine Learning,
                  Web Development, Game Development, Business Problem Solving, and
                  mathematically driven computational science.
                </p>
                <ul className="resume-focus-list">
                  <li>Backend and full-stack product engineering (Node.js, Django, Spring Boot, Flutter).</li>
                  <li>Strong interest in algorithmic thinking, mathematics, and high-impact systems.</li>
                  <li>Passionate about building useful digital tools for communities and businesses.</li>
                </ul>

                <div className="blog-actions-row">
                  <a
                    className="blog-link"
                    href="https://github.com/jeid12"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub /> GitHub
                  </a>
                  <a
                    className="blog-link"
                    href="https://x.com/brojeid"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineTwitter /> X
                  </a>
                  <a
                    className="blog-link"
                    href="https://www.linkedin.com/in/brojeid/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn /> LinkedIn
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
