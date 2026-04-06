import seedData from "./fakeBlogDb.json";

const BLOG_DB_KEY = "portfolio_blog_db_v1";
const BLOG_SESSION_KEY = "portfolio_blog_session_v1";
const BLOG_LIKES_KEY = "portfolio_blog_likes_v1";
export const BLOG_SYNC_EVENT = "portfolio-blog-sync";

const OWNER_EMAIL = "niyokwizerajd123@gmail.com";
const OWNER_PASSWORD = "Jeid@2026";

function toIsoNow() {
  return new Date().toISOString();
}

function normalizePost(post) {
  return {
    id: post.id,
    title: post.title || "Untitled",
    excerpt: post.excerpt || "",
    content: post.content || "",
    tag: post.tag || "General",
    likes: Number.isFinite(post.likes) ? post.likes : 0,
    createdAt: post.createdAt || toIsoNow(),
    updatedAt: post.updatedAt || post.createdAt || toIsoNow(),
  };
}

function normalizeDb(raw) {
  const safe = raw && typeof raw === "object" ? raw : {};
  const posts = Array.isArray(safe.posts) ? safe.posts.map(normalizePost) : [];
  return { posts };
}

function parseJson(json, fallback) {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

function emitSync() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(BLOG_SYNC_EVENT));
  }
}

export function loadDb() {
  const saved = localStorage.getItem(BLOG_DB_KEY);
  if (!saved) {
    const seeded = normalizeDb(seedData);
    saveDb(seeded);
    return seeded;
  }

  const parsed = parseJson(saved, null);
  const normalized = normalizeDb(parsed);
  saveDb(normalized);
  return normalized;
}

export function saveDb(db) {
  localStorage.setItem(BLOG_DB_KEY, JSON.stringify(normalizeDb(db)));
  emitSync();
}

export function getSession() {
  const saved = localStorage.getItem(BLOG_SESSION_KEY);
  const parsed = parseJson(saved, null);
  if (!parsed || typeof parsed !== "object") {
    return { isOwner: false, email: null };
  }
  return {
    isOwner: parsed.email === OWNER_EMAIL,
    email: parsed.email || null,
  };
}

export function login(email, password) {
  const isOwner = email === OWNER_EMAIL && password === OWNER_PASSWORD;
  const session = {
    email: isOwner ? OWNER_EMAIL : email,
    isOwner,
  };
  localStorage.setItem(BLOG_SESSION_KEY, JSON.stringify(session));
  emitSync();
  return session;
}

export function logout() {
  localStorage.removeItem(BLOG_SESSION_KEY);
  emitSync();
}

export function getLikedPostIds() {
  const saved = localStorage.getItem(BLOG_LIKES_KEY);
  const parsed = parseJson(saved, []);
  return Array.isArray(parsed) ? parsed : [];
}

function saveLikedPostIds(ids) {
  localStorage.setItem(BLOG_LIKES_KEY, JSON.stringify(ids));
  emitSync();
}

export function toggleLikePost(postId) {
  const db = loadDb();
  const likedIds = getLikedPostIds();
  const isLiked = likedIds.includes(postId);

  const nextPosts = db.posts.map((post) => {
    if (post.id !== postId) {
      return post;
    }

    return {
      ...post,
      likes: Math.max(0, post.likes + (isLiked ? -1 : 1)),
      updatedAt: toIsoNow(),
    };
  });

  saveDb({ posts: nextPosts });

  const nextLiked = isLiked
    ? likedIds.filter((id) => id !== postId)
    : [...likedIds, postId];

  saveLikedPostIds(nextLiked);

  return {
    db: { posts: nextPosts },
    likedIds: nextLiked,
  };
}

export function createPost(postInput) {
  const db = loadDb();
  const now = toIsoNow();
  const newPost = normalizePost({
    id: `blog-${Date.now()}`,
    ...postInput,
    likes: 0,
    createdAt: now,
    updatedAt: now,
  });

  const nextDb = { posts: [newPost, ...db.posts] };
  saveDb(nextDb);
  return nextDb;
}

export function updatePost(postId, postInput) {
  const db = loadDb();
  const now = toIsoNow();

  const nextPosts = db.posts.map((post) =>
    post.id === postId
      ? normalizePost({
          ...post,
          ...postInput,
          id: post.id,
          likes: post.likes,
          updatedAt: now,
        })
      : post
  );

  const nextDb = { posts: nextPosts };
  saveDb(nextDb);
  return nextDb;
}

export function deletePost(postId) {
  const db = loadDb();
  const nextDb = { posts: db.posts.filter((post) => post.id !== postId) };
  saveDb(nextDb);

  const likedIds = getLikedPostIds().filter((id) => id !== postId);
  saveLikedPostIds(likedIds);

  return {
    db: nextDb,
    likedIds,
  };
}
