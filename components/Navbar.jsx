"use client";

import Link from "next/link";
import { useChat } from "./ChatContext";
import Logo from "./Logo";

const navLinks = [
  { label: "Soluciones", href: "/#ecosistema" },
  { label: "Industrias", href: "/solutions/financial-services-cloud" },
  { label: "Casos de éxito", href: "/casos-de-exito" },
  { label: "Nosotros", href: "/#metodologia" },
  { label: "Recursos", href: "/blog" },
];

export default function Navbar({ transparent = false }) {
  const { openChat } = useChat();

  return (
    <nav
      className={`sticky top-0 z-[200] flex items-center px-10 h-16 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-white border-b border-border"
      }`}
    >
      <Logo className="h-11" />

      <ul className="flex gap-7 list-none flex-1 justify-center">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[13.5px] font-medium text-gray-700 transition-colors hover:text-blue nav-link-anim"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 shrink-0">
        <button
          className={`btn btn-navy ${transparent ? "btn-navy-hero" : ""}`}
          onClick={() => openChat({ mode: "calendar" })}
        >
          Agenda una consultoría →
        </button>
        <button
          className={`text-[13px] font-medium bg-transparent border-none flex items-center gap-0.5 ${
            transparent ? "text-white" : "text-gray-700"
          }`}
        >
          ES ▾
        </button>
      </div>
    </nav>
  );
}
