import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.status !== "published") return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.status !== "published") notFound();

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <Navbar />

      <div className="py-2.5 px-4 sm:px-6 md:px-10 bg-bg border-b border-border text-[12.5px] text-text-3 flex flex-wrap items-center gap-1.5">
        <Link href="/" className="text-blue">Inicio</Link>
        <span className="text-gray-300">›</span>
        <Link href="/blog" className="text-blue">Blog</Link>
        <span className="text-gray-300">›</span>
        {post.title}
      </div>

      <article className="py-12 md:py-16 lg:py-[72px] px-4 sm:px-6 md:px-10 max-w-[760px] mx-auto">
        <Link
          href={`/blog/categoria/${post.category}`}
          className="text-[11px] font-bold uppercase tracking-wider text-blue mb-3 inline-block"
        >
          {post.categoryLabel}
        </Link>
        <h1 className="text-[26px] sm:text-[32px] md:text-[36px] font-extrabold text-navy mb-4 tracking-tight leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-[13px] text-text-3 mb-8 pb-6 border-b border-border">
          <span>{post.author}</span>
          <time>
            {new Date(post.publishedAt).toLocaleDateString("es-MX", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <p className="text-[16px] text-text-2 leading-[1.7] mb-8 font-medium">{post.excerpt}</p>

        <div className="flex flex-col gap-5">
          {paragraphs.map((para) => (
            <p key={para.slice(0, 40)} className="text-[15px] text-text-2 leading-[1.75]">
              {para}
            </p>
          ))}
        </div>
      </article>

      <CtaBanner
        title="¿Listo para aplicar esto en tu empresa?"
        description="Agenda una consultoría gratuita con nuestros expertos en Salesforce."
        showPartnerBox={false}
      />
      <Footer />
    </>
  );
}
