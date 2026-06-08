import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="bg-white border-[1.5px] border-border rounded-lg overflow-hidden card-lift hover:shadow-card-lg flex flex-col">
      <div className="p-5 flex flex-col flex-1">
        <Link
          href={`/blog/categoria/${post.category}`}
          className="text-[10px] font-bold uppercase tracking-wider text-blue mb-2 w-fit"
        >
          {post.categoryLabel}
        </Link>
        <h3 className="text-[15px] font-bold text-navy mb-2 leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-blue transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-[12.5px] text-text-2 leading-normal mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-[11px] text-text-3">{post.author}</span>
          <time className="text-[11px] text-text-3">
            {new Date(post.publishedAt).toLocaleDateString("es-MX", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </div>
      </div>
    </article>
  );
}
