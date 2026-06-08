"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminLogoutButton from "@/components/AdminLogoutButton";
import Icon from "@/components/Icon";

const navItems = [
  { href: "/admin/blog", label: "Artículos", icon: "document-text", match: "/admin/blog" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] shrink-0 bg-navy flex flex-col min-h-screen sticky top-0 h-screen">
      <div className="px-5 py-5 border-b border-white/[0.08]">
        <Link href="/admin/blog" className="flex items-center gap-2.5">
          <Image
            src="/logo-coders.webp"
            alt="Coders Solution"
            width={120}
            height={40}
            className="h-8 w-auto object-contain brightness-0 invert"
          />
        </Link>
        <p className="text-[10px] font-bold tracking-[1.2px] uppercase text-white/40 mt-2">
          Panel CMS
        </p>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 px-3 mb-2">
          Contenido
        </p>
        {navItems.map((item) => {
          const active =
            pathname === item.href ||
            (item.match && pathname.startsWith(item.match));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all ${
                active
                  ? "bg-white/10 text-white border border-white/10"
                  : "text-white/55 hover:bg-white/[0.06] hover:text-white/80"
              }`}
            >
              <Icon name={item.icon} className="w-4 h-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-white/[0.08] flex flex-col gap-1">
        <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 px-3 mb-2">
          Sitio
        </p>
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium text-white/55 hover:bg-white/[0.06] hover:text-white/80 transition-all"
        >
          <Icon name="globe-alt" className="w-4 h-4 shrink-0" /> Ver sitio web
        </Link>
        <Link
          href="/blog"
          target="_blank"
          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium text-white/55 hover:bg-white/[0.06] hover:text-white/80 transition-all"
        >
          <Icon name="document-text" className="w-4 h-4 shrink-0" /> Ver blog
        </Link>
      </div>

      <div className="px-4 py-4 border-t border-white/[0.08]">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue to-[#00b4d8] flex items-center justify-center text-xs font-bold text-white">
            CS
          </div>
          <div className="min-w-0">
            <p className="text-[12px] font-semibold text-white truncate">Admin</p>
            <p className="text-[10px] text-white/40">Coders Solution</p>
          </div>
        </div>
        <AdminLogoutButton variant="sidebar" />
      </div>
    </aside>
  );
}
