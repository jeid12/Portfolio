import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/jd.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  BLOG_SYNC_EVENT,
  getSession,
  login,
  logout,
} from "./Blog/blogStorage";

import {
  AiFillStar,
  AiOutlineRead,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [session, setSession] = useState(() => getSession());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    function syncSession() {
      setSession(getSession());
    }

    window.addEventListener("storage", syncSession);
    window.addEventListener(BLOG_SYNC_EVENT, syncSession);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("storage", syncSession);
      window.removeEventListener(BLOG_SYNC_EVENT, syncSession);
    };
  }, []);

  function handleOwnerLogin(event) {
    event.preventDefault();
    const nextSession = login(email.trim(), password);

    if (!nextSession.isOwner) {
      setAuthError("Invalid owner credentials.");
      return;
    }

    setSession(nextSession);
    setAuthError("");
    setEmail("");
    setPassword("");
    setShowLoginModal(false);
  }

  function handleOwnerLogout() {
    logout();
    setSession({ isOwner: false, email: null });
    setAuthError("");
    setEmail("");
    setPassword("");
  }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
       
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blog"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineRead style={{ marginBottom: "2px" }} /> Blog
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              {session.isOwner ? (
                <Button
                  variant="outline-light"
                  size="sm"
                  className="owner-auth-btn"
                  onClick={handleOwnerLogout}
                >
                  Logout Owner
                </Button>
              ) : (
                <Button
                  variant="outline-light"
                  size="sm"
                  className="owner-auth-btn"
                  onClick={() => {
                    setShowLoginModal(true);
                    updateExpanded(false);
                  }}
                >
                  Owner Login
                </Button>
              )}
            </Nav.Item>
            

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/jeid12"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Owner Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOwnerLogin}>
            <Form.Group className="mb-3" controlId="ownerLoginEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Owner email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ownerLoginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Owner password"
                required
              />
            </Form.Group>

            {authError ? <p className="blog-form-error">{authError}</p> : null}

            <Button type="submit" variant="primary">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default NavBar;
