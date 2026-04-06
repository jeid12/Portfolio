import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";
import Particle from "../Particle";

const staticPosts = [
  {
    id: "post-1",
    title: "Designing Reliable Digital Products for Rwanda",
    excerpt:
      "Lessons from building practical systems for schools, communities, and public services.",
    link: "https://github.com/jeid12",
    tag: "Engineering",
  },
  {
    id: "post-2",
    title: "What I Learned from Building AI + Web Integrations",
    excerpt:
      "How I combine ML models and product UX to deliver features people can actually use.",
    link: "https://github.com/jeid12",
    tag: "AI",
  },
  {
    id: "post-3",
    title: "From Prototype to Production: My Build Workflow",
    excerpt:
      "The architecture and release checklist I use to ship better software with confidence.",
    link: "https://github.com/jeid12",
    tag: "Workflow",
  },
];

function Blog() {
  const [repoUpdates, setRepoUpdates] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function loadUpdates() {
      try {
        const response = await fetch(
          "https://api.github.com/users/jeid12/repos?per_page=100&sort=updated"
        );
        const repos = await response.json();

        if (!Array.isArray(repos) || ignore) {
          return;
        }

        const updates = repos
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          )
          .slice(0, 6)
          .map((repo) => ({
            id: repo.id,
            title: `Update: ${repo.name}`,
            excerpt:
              repo.description ||
              "Fresh commits and improvements shipped recently in this repository.",
            link: repo.html_url,
            tag: repo.language || "Code",
          }));

        setRepoUpdates(updates);
      } catch (error) {
        setRepoUpdates([]);
      }
    }

    loadUpdates();

    return () => {
      ignore = true;
    };
  }, []);

  const posts = [...staticPosts, ...repoUpdates];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Blog & <strong className="purple">Updates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Thoughts on software, AI, and recent progress from my active GitHub work.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          {posts.map((post) => (
            <Col md={4} className="blog-card" key={post.id}>
              <Card className="blog-card-view">
                <Card.Body>
                  <Badge bg="dark" className="project-chip">
                    {post.tag}
                  </Badge>
                  <Card.Title style={{ marginTop: "14px" }}>{post.title}</Card.Title>
                  <Card.Text style={{ textAlign: "left" }}>{post.excerpt}</Card.Text>
                  <a
                    className="blog-link"
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read more <BsArrowUpRight />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
