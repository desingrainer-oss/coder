import Link from "next/link";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import BlogSearch from "@/components/BlogSearch";
import { searchPosts } from "@/lib/blog";

export const metadata = {
  title: "Buscar en el blog | Coders Solution",
  description: "Busca artículos sobre Salesforce, implementación, IA e industria.",
};

function SearchResults({ query }) {
  const posts = searchPosts(query);

  return (
    <>
      <p className="text-[15px] text-text-2 mb-8 text-center">
        {posts.length} resultado{posts.length !== 1 ? "s" : ""} para &ldquo;{query}&rdquo;
      </p>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-text-3">No se encontraron artículos. Prueba con otros términos.</p>
      )}
    </>
  );
}

export default async function BlogSearchPage({ searchParams }) {
  const { q = "" } = await searchParams;

  return (
    <>
      <Navbar />

      <div className="py-2.5 px-4 sm:px-6 md:px-10 bg-bg border-b border-border text-[12.5px] text-text-3 flex flex-wrap items-center gap-1.5">
        <Link href="/" className="text-blue">Inicio</Link>
        <span className="text-gray-300">›</span>
        <Link href="/blog" className="text-blue">Blog</Link>
        <span className="text-gray-300">›</span>
        Buscar
      </div>

      <div className="py-12 md:py-16 lg:py-[72px] px-4 sm:px-6 md:px-10">
        <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-navy mb-6 tracking-tight text-center">
          Buscar artículos
        </h1>

        <div className="flex justify-center mb-10">
          <Suspense fallback={null}>
            <BlogSearch />
          </Suspense>
        </div>

        {q ? (
          <SearchResults query={q} />
        ) : (
          <p className="text-center text-text-3">Escribe un término para buscar artículos.</p>
        )}

        <div className="text-center mt-8">
          <Link href="/blog" className="link-blue">← Volver al blog</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
