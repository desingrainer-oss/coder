import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { productSlugs, products } from "@/data/products";
import { AnimateIn } from "@/components/motion/Motion";

const solutionLinks = productSlugs.map((slug) => ({
  label: products[slug].title,
  href: `/solutions/${slug}`,
}));

const socialLinks = [
  { id: "linkedin", label: "LinkedIn", icon: "link", href: "#" },
  { id: "x", label: "X", icon: "xmark", href: "#" },
  { id: "youtube", label: "YouTube", icon: "play", href: "#" },
  { id: "instagram", label: "Instagram", icon: "camera", href: "#", hideOnCompact: true },
];

export default function Footer({ compact = false }) {
  const visibleSocial = socialLinks.filter((s) => !compact || !s.hideOnCompact);

  return (
    <footer className="bg-navy text-white/60 py-10 md:py-14 px-4 sm:px-6 md:px-10 pb-6">
      <AnimateIn y={16}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-10 mb-10 md:mb-12">
        <div>
          <Logo className="h-14" />
          <p className="text-[12.5px] text-white/50 max-w-[240px] leading-relaxed mt-2.5">
            {compact
              ? "Partner Oficial de Salesforce."
              : "Partner Oficial de Salesforce. Ayudamos a empresas a implementar, optimizar y escalar Salesforce para crecer de forma inteligente."}
          </p>
          <div className="flex gap-2 mt-[18px]">
            {visibleSocial.map((s) => (
              <a
                key={s.id}
                href={s.href}
                aria-label={s.label}
                className="w-[34px] h-[34px] rounded-[7px] bg-white/[0.07] border border-white/10 flex items-center justify-center cursor-pointer transition-colors hover:bg-white/[0.14]"
              >
                <Icon name={s.icon} className="w-4 h-4 text-white/70" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-[11px] font-bold text-white tracking-widest uppercase mb-3.5">
            Soluciones
          </h5>
          <ul className="list-none flex flex-col gap-[7px]">
            {solutionLinks.slice(0, compact ? 5 : 7).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[12.5px] text-white/50 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-[11px] font-bold text-white tracking-widest uppercase mb-3.5">
            Servicios
          </h5>
          <ul className="list-none flex flex-col gap-[7px]">
            {[
              { label: "Salesforce Consulting", href: "/consulting" },
              { label: compact ? "Implementation" : "Salesforce Implementation", href: "/implementation" },
              { label: "Managed Services", href: "/managed" },
              ...(compact ? [] : [{ label: "Casos de éxito", href: "/casos-de-exito" }]),
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-[12.5px] text-white/50 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-[11px] font-bold text-white tracking-widest uppercase mb-3.5">
            Empresa
          </h5>
          <ul className="list-none flex flex-col gap-[7px]">
            {[
              { label: "Nosotros", href: "/#metodologia" },
              ...(compact ? [] : [{ label: "Recursos", href: "/blog" }]),
              ...(compact ? [] : [{ label: "Blog", href: "/blog" }]),
              { label: "Contacto", href: "/#contacto" },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-[12.5px] text-white/50 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.07] pt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[11.5px] text-white/35">
        <span>
          {compact
            ? "© 2025 Coders Solution."
            : "© 2025 Coders Solution. Todos los derechos reservados."}
        </span>
        <span>
          {compact ? "hola@coderssolution.com" : "Partner Oficial Salesforce · hola@coderssolution.com"}
        </span>
      </div>
      </AnimateIn>
    </footer>
  );
}
