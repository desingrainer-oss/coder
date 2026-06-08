import fs from "fs";
import path from "path";
import { BLOG_CATEGORIES } from "@/data/blogCategories";

const POSTS_PATH = path.join(process.cwd(), "content/blog/posts.json");

export { BLOG_CATEGORIES };

function readStore() {
  const raw = fs.readFileSync(POSTS_PATH, "utf-8");
  return JSON.parse(raw);
}

function writeStore(data) {
  fs.writeFileSync(POSTS_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export function getAllPosts({ includeDrafts = false } = {}) {
  const { posts } = readStore();
  return posts
    .filter((p) => includeDrafts || p.status === "published")
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

export function getPostBySlug(slug) {
  const { posts } = readStore();
  return posts.find((p) => p.slug === slug) || null;
}

export function getPostById(id) {
  const { posts } = readStore();
  return posts.find((p) => p.id === id) || null;
}

export function getPostsByCategory(categorySlug) {
  return getAllPosts().filter((p) => p.category === categorySlug);
}

export function searchPosts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return getAllPosts();
  return getAllPosts().filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.content.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q)
  );
}

export function getCategoryLabel(slug) {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)?.label || slug;
}

export function createPost(data) {
  const store = readStore();
  const id = String(
    Math.max(0, ...store.posts.map((p) => Number(p.id))) + 1
  );
  const post = {
    id,
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    content: data.content,
    category: data.category,
    categoryLabel: getCategoryLabel(data.category),
    author: data.author || "Equipo Coders Solution",
    publishedAt: data.publishedAt || new Date().toISOString().slice(0, 10),
    status: data.status || "draft",
    seoTitle: data.seoTitle || data.title,
    seoDescription: data.seoDescription || data.excerpt,
  };
  store.posts.push(post);
  writeStore(store);
  return post;
}

export function updatePost(id, data) {
  const store = readStore();
  const index = store.posts.findIndex((p) => p.id === id);
  if (index === -1) return null;
  const updated = {
    ...store.posts[index],
    ...data,
    categoryLabel: data.category
      ? getCategoryLabel(data.category)
      : store.posts[index].categoryLabel,
  };
  store.posts[index] = updated;
  writeStore(store);
  return updated;
}

export function deletePost(id) {
  const store = readStore();
  const index = store.posts.findIndex((p) => p.id === id);
  if (index === -1) return false;
  store.posts.splice(index, 1);
  writeStore(store);
  return true;
}
