import { productSlugs } from "@/data/products";
import { caseStudySlugs } from "@/data/caseStudies";
import { getAllPosts } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/data/blogCategories";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://coderssolution.com";

export default function sitemap() {
  const staticPages = [
    "",
    "/consulting",
    "/implementation",
    "/managed",
    "/casos-de-exito",
    "/blog",
    "/blog/buscar",
  ];

  const solutionPages = productSlugs.map((slug) => `/solutions/${slug}`);
  const casePages = caseStudySlugs.map((slug) => `/casos-de-exito/${slug}`);
  const blogPosts = getAllPosts().map((post) => `/blog/${post.slug}`);
  const blogCategories = BLOG_CATEGORIES.map((cat) => `/blog/categoria/${cat.slug}`);

  const allRoutes = [...staticPages, ...solutionPages, ...casePages, ...blogPosts, ...blogCategories];

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blog/") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog") ? 0.7 : 0.8,
  }));
}
