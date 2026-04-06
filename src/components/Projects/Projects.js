import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";
import baza from "../../Assets/Projects/baza.png";

const featuredProjects = [
  {
    id: "featured-livetoserves",
    title: "Excellent Servant Academy",
    description:
      "A modern learning platform for private candidates following Rwanda's secondary school curriculum.",
    ghLink: "https://github.com/jeid12",
    demoLink: "https://www.livetoserves.com",
    imgPath: chatify,
    isFeatured: true,
  },
  {
    id: "featured-lenny-news",
    title: "Lenny Today News Update",
    description:
      "A React-based news experience with live updates and streamlined content browsing.",
    ghLink: "https://github.com/jeid12/lennytoday",
    demoLink: "https://mood.livetoserves.com",
    imgPath: leaf,
    isFeatured: true,
  },
  {
    id: "featured-citizen-system",
    title: "Rwandan Citizen Engagement System",
    description:
      "A transparent feedback platform where citizens can submit questions and receive responses from public institutions.",
    ghLink: "https://github.com/jeid12/Citizen-Engagement-System",
    demoLink: "https://bazarw.netlify.app/",
    imgPath: baza,
    isFeatured: true,
  },
  {
    id: "featured-mood-match",
    title: "Mood Match",
    description:
      "An AI-powered experience that detects facial mood and recommends matching music or story content.",
    ghLink: "https://github.com/jeid12/Alx-portfolio",
    imgPath: emotion,
    isFeatured: true,
  },
];

const TABS = {
  ALL: "all",
  FEATURED: "featured",
  GITHUB: "github",
};

function mapRepoToCard(repo) {
  return {
    id: repo.id,
    title: repo.name,
    description:
      repo.description ||
      "Repository with ongoing experiments, implementation work, and production-focused improvements.",
    ghLink: repo.html_url,
    demoLink: repo.homepage || "",
    imgPath: `https://opengraph.githubassets.com/1/jeid12/${repo.name}`,
    language: repo.language,
    stars: repo.stargazers_count,
    updatedAt: repo.updated_at,
    isFeatured: false,
  };
}

function Projects() {
  const [tab, setTab] = useState(TABS.ALL);
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/jeid12/repos?per_page=100&sort=updated"
        );
        const repos = await response.json();

        if (!Array.isArray(repos) || ignore) {
          return;
        }

        const curated = repos
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          )
          .slice(0, 9)
          .map(mapRepoToCard);

        setGithubProjects(curated);
      } catch (error) {
        setGithubProjects([]);
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadRepos();

    return () => {
      ignore = true;
    };
  }, []);

  const allProjects = useMemo(
    () => [...featuredProjects, ...githubProjects],
    [githubProjects]
  );

  const visibleProjects = useMemo(() => {
    if (tab === TABS.FEATURED) {
      return featuredProjects;
    }

    if (tab === TABS.GITHUB) {
      return githubProjects;
    }

    return allProjects;
  }, [tab, allProjects, githubProjects]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Featured builds plus live projects pulled from my GitHub profile.
        </p>

        <div className="project-controls">
          <ButtonGroup aria-label="Project filter tabs">
            <Button
              variant={tab === TABS.ALL ? "primary" : "outline-light"}
              onClick={() => setTab(TABS.ALL)}
            >
              All ({allProjects.length})
            </Button>
            <Button
              variant={tab === TABS.FEATURED ? "primary" : "outline-light"}
              onClick={() => setTab(TABS.FEATURED)}
            >
              Featured ({featuredProjects.length})
            </Button>
            <Button
              variant={tab === TABS.GITHUB ? "primary" : "outline-light"}
              onClick={() => setTab(TABS.GITHUB)}
            >
              GitHub ({githubProjects.length})
            </Button>
          </ButtonGroup>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {loading && tab !== TABS.FEATURED && (
            <p style={{ color: "white", marginTop: "24px" }}>
              Syncing projects from GitHub...
            </p>
          )}

          {!loading && visibleProjects.length === 0 && (
            <p style={{ color: "white", marginTop: "24px" }}>
              No projects available in this tab yet.
            </p>
          )}

          {visibleProjects.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                language={project.language}
                stars={project.stars}
                updatedAt={project.updatedAt}
                isFeatured={project.isFeatured}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
