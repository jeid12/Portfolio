import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Card, Badge, Form, Button } from "react-bootstrap";
import { BsArrowUpRight, BsHeart, BsHeartFill, BsPencilSquare, BsTrash } from "react-icons/bs";
import Particle from "../Particle";
import {
  BLOG_SYNC_EVENT,
  createPost,
  deletePost,
  getLikedPostIds,
  getSession,
  loadDb,
  toggleLikePost,
  updatePost,
} from "./blogStorage";

const emptyPostForm = {
  title: "",
  excerpt: "",
  content: "",
  tag: "",
};

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function Blog() {
  const [db, setDb] = useState(() => loadDb());
  const [session, setSession] = useState(() => getSession());
  const [likedPostIds, setLikedPostIds] = useState(() => getLikedPostIds());

  const [editingPostId, setEditingPostId] = useState(null);
  const [postForm, setPostForm] = useState(emptyPostForm);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    function syncState() {
      setSession(getSession());
      setDb(loadDb());
      setLikedPostIds(getLikedPostIds());
    }

    window.addEventListener("storage", syncState);
    window.addEventListener(BLOG_SYNC_EVENT, syncState);

    return () => {
      window.removeEventListener("storage", syncState);
      window.removeEventListener(BLOG_SYNC_EVENT, syncState);
    };
  }, []);

  const posts = useMemo(
    () =>
      [...db.posts].sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      ),
    [db.posts]
  );

  function handleFieldChange(field, value) {
    setPostForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function startEdit(post) {
    setEditingPostId(post.id);
    setPostForm({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      tag: post.tag,
    });
    setFormError("");
  }

  function resetForm() {
    setEditingPostId(null);
    setPostForm(emptyPostForm);
    setFormError("");
  }

  function validatePostForm() {
    if (!postForm.title.trim()) {
      return "Title is required.";
    }
    if (!postForm.excerpt.trim()) {
      return "Excerpt is required.";
    }
    if (!postForm.content.trim()) {
      return "Content is required.";
    }
    return "";
  }

  function handleSavePost(event) {
    event.preventDefault();
    const error = validatePostForm();
    if (error) {
      setFormError(error);
      return;
    }

    const postInput = {
      title: postForm.title.trim(),
      excerpt: postForm.excerpt.trim(),
      content: postForm.content.trim(),
      tag: postForm.tag.trim() || "General",
    };

    if (editingPostId) {
      setDb(updatePost(editingPostId, postInput));
    } else {
      setDb(createPost(postInput));
    }

    resetForm();
  }

  function handleDeletePost(postId) {
    const next = deletePost(postId);
    setDb(next.db);
    setLikedPostIds(next.likedIds);
    if (editingPostId === postId) {
      resetForm();
    }
  }

  function handleToggleLike(postId) {
    const next = toggleLikePost(postId);
    setDb(next.db);
    setLikedPostIds(next.likedIds);
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Blog & <strong className="purple">Updates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Everyone can see and like posts. Owner login is available from the navbar to create, edit, and delete.
        </p>

        {session.isOwner ? (
          <Card className="blog-editor-card">
            <Card.Body>
              <h5>{editingPostId ? "Edit Post" : "Create New Post"}</h5>
              <Form onSubmit={handleSavePost}>
                <Row>
                  <Col md={8}>
                    <Form.Group controlId="blogTitle">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={postForm.title}
                        onChange={(e) => handleFieldChange("title", e.target.value)}
                        placeholder="Post title"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="blogTag">
                      <Form.Label>Tag</Form.Label>
                      <Form.Control
                        type="text"
                        value={postForm.tag}
                        onChange={(e) => handleFieldChange("tag", e.target.value)}
                        placeholder="AI, Web, etc"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="blogExcerpt">
                  <Form.Label>Excerpt</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={postForm.excerpt}
                    onChange={(e) => handleFieldChange("excerpt", e.target.value)}
                    placeholder="Short preview text"
                  />
                </Form.Group>

                <Form.Group controlId="blogContent">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={postForm.content}
                    onChange={(e) => handleFieldChange("content", e.target.value)}
                    placeholder="Write your post content"
                  />
                </Form.Group>

                <div className="blog-editor-actions">
                  <Button type="submit" variant="primary">
                    {editingPostId ? "Update Post" : "Create Post"}
                  </Button>
                  {editingPostId ? (
                    <Button type="button" variant="outline-light" onClick={resetForm}>
                      Cancel Edit
                    </Button>
                  ) : null}
                </div>
                {formError ? <p className="blog-form-error">{formError}</p> : null}
              </Form>
            </Card.Body>
          </Card>
        ) : null}

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          {posts.map((post) => (
            <Col lg={4} md={6} sm={12} className="blog-card" key={post.id}>
              <Card className="blog-card-view">
                <Card.Body>
                  <Badge bg="dark" className="project-chip">
                    {post.tag}
                  </Badge>
                  <Card.Title style={{ marginTop: "14px" }}>{post.title}</Card.Title>
                  <Card.Text style={{ textAlign: "left" }}>{post.excerpt}</Card.Text>
                  <Card.Text className="blog-content-preview">{post.content}</Card.Text>

                  <div className="blog-meta-row">
                    <span>Updated {formatDate(post.updatedAt)}</span>
                    <span>{post.likes} likes</span>
                  </div>

                  <div className="blog-actions-row">
                    <Button
                      variant="outline-light"
                      size="sm"
                      onClick={() => handleToggleLike(post.id)}
                    >
                      {likedPostIds.includes(post.id) ? <BsHeartFill /> : <BsHeart />} Like
                    </Button>

                    {session.isOwner ? (
                      <>
                        <Button
                          variant="outline-light"
                          size="sm"
                          onClick={() => startEdit(post)}
                        >
                          <BsPencilSquare /> Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDeletePost(post.id)}
                        >
                          <BsTrash /> Delete
                        </Button>
                      </>
                    ) : (
                      <span className="blog-link">Read only <BsArrowUpRight /></span>
                    )}
                  </div>
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
