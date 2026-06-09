"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useChat } from "./ChatContext";
import Logo from "./Logo";
import Icon from "./Icon";

const navLinks = [
  { label: "Soluciones", href: "/#ecosistema" },
  { label: "Industrias", href: "/solutions/financial-services-cloud" },
  { label: "Casos de éxito", href: "/casos-de-exito" },
  { label: "Nosotros", href: "/#metodologia" },
  { label: "Recursos", href: "/blog" },
];

export default function Navbar({ transparent = false }) {
  const { openChat } = useChat();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navBg = transparent
    ? "bg-white border-b border-border lg:bg-transparent lg:border-transparent lg:backdrop-blur-none isolation-isolate"
    : "bg-white border-b border-border isolation-isolate";

  const linkClass = transparent
    ? "text-gray-700 lg:text-gray-700"
    : "text-gray-700";

  return (
    <>
      <nav className={`sticky top-0 z-[200] flex items-center justify-between gap-4 px-4 sm:px-6 md:px-10 h-14 md:h-16 ${navBg}`}>
        <Logo
          className="h-9 md:h-11 shrink-0"
          blend={transparent}
          blendDesktopOnly={transparent}
        />

        <ul className="hidden lg:flex gap-7 list-none flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-[13.5px] font-medium transition-colors hover:text-blue nav-link-anim ${linkClass}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            className={`btn btn-navy ${transparent ? "btn-navy-hero" : ""}`}
            onClick={() => openChat({ mode: "calendar" })}
          >
            Agenda una consultoría →
          </button>
          <button
            type="button"
            className={`text-[13px] font-medium bg-transparent border-none flex items-center gap-0.5 transition-colors ${
              transparent
                ? "text-gray-700 lg:text-white lg:hover:text-white/80"
                : "text-gray-700 hover:text-navy"
            }`}
          >
            ES ▾
          </button>
        </div>

        <button
          type="button"
          className="lg:hidden w-10 h-10 rounded-lg border border-border flex items-center justify-center text-navy bg-white shrink-0"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "xmark" : "bars-3"} className="w-5 h-5" />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-0 z-[199] bg-navy/40 backdrop-blur-[2px]" onClick={() => setOpen(false)} />
      )}

      <div
        className={`lg:hidden fixed top-14 left-0 right-0 z-[200] bg-white border-b border-border shadow-card-lg transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col py-3 px-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block py-3 text-[15px] font-medium text-navy border-b border-border/60 last:border-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-4 pb-4">
          <button
            className="btn btn-navy w-full justify-center"
            onClick={() => {
              setOpen(false);
              openChat({ mode: "calendar" });
            }}
          >
            Agenda una consultoría →
          </button>
        </div>
      </div>
    </>
  );
}
