import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getPostsByCategory, BLOG_CATEGORIES } from "@/lib/blog";

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.label} | Blog Coders Solution`,
    description: `Artículos sobre ${category.label} en el blog de Coders Solution.`,
  };
}

export default async function BlogCategoryPage({ params }) {
  const { slug } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const posts = getPostsByCategory(slug);

  return (
    <>
      <Navbar />

      <div className="py-2.5 px-10 bg-bg border-b border-border text-[12.5px] text-text-3 flex items-center gap-1.5">
        <Link href="/" className="text-blue">Inicio</Link>
        <span className="text-gray-300">›</span>
        <Link href="/blog" className="text-blue">Blog</Link>
        <span className="text-gray-300">›</span>
        {category.label}
      </div>

      <div className="py-[72px] px-10">
        <h1 className="text-[32px] font-extrabold text-navy mb-3 tracking-tight text-center">
          {category.label}
        </h1>
        <p className="text-[15px] text-text-2 max-w-[600px] mx-auto mb-11 leading-[1.65] text-center">
          {posts.length} artículo{posts.length !== 1 ? "s" : ""} en esta categoría.
        </p>

        {posts.length > 0 ? (
          <div className="grid grid-cols-3 gap-5">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-text-3">No hay artículos en esta categoría aún.</p>
        )}

        <div className="text-center mt-8">
          <Link href="/blog" className="link-blue">← Volver al blog</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
