import Link from "next/link";

export default function AdminTopbar({ title, subtitle, breadcrumbs = [], actions }) {
  return (
    <header className="bg-white border-b border-border px-6 lg:px-8 py-4 shrink-0">
      {breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-1.5 text-[12px] text-text-3 mb-2">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-gray-300">›</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="text-blue font-medium hover:underline">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-text-2">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-[20px] font-extrabold text-navy tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-[13px] text-text-3 mt-0.5">{subtitle}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2.5">{actions}</div>}
      </div>
    </header>
  );
}
