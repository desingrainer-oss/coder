import Link from "next/link";

export default function CaseStudyCard({ study, compact = false }) {
  return (
    <div className="bg-white border-[1.5px] border-border rounded-lg overflow-hidden card-lift hover:shadow-card-lg">
      <div className={`${compact ? "h-32" : "h-40"} relative overflow-hidden flex items-center justify-center`}>
        <div className="absolute inset-0" style={{ background: study.gradient }} />
        <span className="absolute top-3 left-3 z-[2] bg-white/15 backdrop-blur-sm border border-white/20 rounded-full py-0.5 px-2.5 text-[10px] font-semibold text-white tracking-wider">
          {study.tag}
        </span>
        <div className={`bg-white rounded-[7px] py-1.5 px-3.5 font-black text-base text-navy z-[2] relative ${study.logoSize}`}>
          {study.logo}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-sm font-bold text-navy mb-2 leading-snug">{study.title}</h3>
        <p className="text-[12.5px] text-text-2 mb-3.5 leading-normal">{study.summary}</p>
        <div className="flex gap-4 mb-3.5 flex-wrap">
          {study.metrics.map((m) => (
            <div key={m.l}>
              <div className="text-lg font-extrabold text-green leading-none">{m.v}</div>
              <div className="text-[10px] text-text-3 mt-0.5">{m.l}</div>
            </div>
          ))}
        </div>
        <Link href={`/casos-de-exito/${study.slug}`} className="link-blue">
          Ver caso completo →
        </Link>
      </div>
    </div>
  );
}
