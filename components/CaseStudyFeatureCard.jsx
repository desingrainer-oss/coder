import Image from "next/image";
import Link from "next/link";

const coverImages = {
  kavak: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  "grupo-lala": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  "grupo-impresor": "https://images.unsplash.com/photo-1454165804604-c3d57bc86b40?w=800&q=80",
  ganac: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  probemedic: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  elohim: "https://images.unsplash.com/photo-1441986300917-6466bd60d8?w=800&q=80",
  meylogistics: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  neored: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  sejo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  "bl-real-estate": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  webuild: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
};

export default function CaseStudyFeatureCard({ study }) {
  const cover = study.coverImage || coverImages[study.slug] || coverImages.kavak;

  return (
    <div className="bg-white border border-border/80 rounded-2xl shadow-card overflow-hidden flex flex-col sm:flex-row h-full min-h-0 sm:min-h-[300px] card-lift">
      <div className="relative w-full sm:w-[42%] shrink-0 h-[180px] sm:h-auto sm:my-5 sm:ml-5 rounded-none sm:rounded-xl overflow-hidden sm:self-stretch sm:min-h-[240px]">
        <Image
          src={cover}
          alt={study.client}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 320px"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a73e8]/60 via-[#1a73e8]/45 to-[#0a1628]/55" />
        <div
          className={`absolute top-4 left-4 z-[2] bg-white rounded-md py-1.5 px-3 font-black text-[15px] text-navy shadow-sm ${study.logoSize || ""}`}
        >
          {study.logo}
        </div>
      </div>

      <div className="flex flex-col flex-1 py-5 sm:py-6 px-5 sm:pr-6 sm:pl-5 min-w-0">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.12em] mb-2.5">
          {study.tag}
        </span>
        <h3 className="text-[16px] sm:text-[17px] font-bold text-navy leading-[1.45] mb-4 sm:mb-5 pr-0 sm:pr-2">{study.title}</h3>

        <ul className="flex flex-col gap-2.5 flex-1">
          {study.metrics.map((m) => (
            <li key={m.l} className="text-[13px] sm:text-[13.5px] leading-snug">
              <span className="font-extrabold text-green">{m.v}</span>
              <span className="text-text-2 ml-2">{m.l}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/casos-de-exito/${study.slug}`}
          className="link-blue text-[13.5px] font-semibold self-start sm:self-end mt-5 shrink-0"
        >
          Ver caso completo →
        </Link>
      </div>
    </div>
  );
}
