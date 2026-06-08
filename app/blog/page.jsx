import Link from "next/link";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import BlogSearch from "@/components/BlogSearch";
import { getAllPosts, BLOG_CATEGORIES } from "@/lib/blog";

export const metadata = {
  title: "Blog | Coders Solution",
  description:
    "Artículos sobre Salesforce, implementación, IA, industria y casos de éxito por el equipo de Coders Solution.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />

      <div className="py-2.5 px-10 bg-bg border-b border-border text-[12.5px] text-text-3">
        Inicio › Blog
      </div>

      <div className="py-[72px] px-10">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-blue mb-2.5 text-center">
          RECURSOS
        </p>
        <h1 className="text-[32px] font-extrabold text-navy mb-3 tracking-tight text-center">
          Blog Coders Solution
        </h1>
        <p className="text-[15px] text-text-2 max-w-[600px] mx-auto mb-8 leading-[1.65] text-center">
          Insights, guías y tendencias sobre Salesforce, implementación e IA para tu negocio.
        </p>

        <div className="flex flex-col items-center gap-6 mb-10">
          <Suspense fallback={null}>
            <BlogSearch />
          </Suspense>
          <div className="flex flex-wrap gap-2 justify-center">
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/categoria/${cat.slug}`}
                className="text-[12px] font-semibold border-[1.5px] border-border rounded-full py-1.5 px-3.5 text-text-2 hover:border-blue hover:text-blue transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
