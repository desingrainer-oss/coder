"use client";

import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";

export default function AdminLogoutButton({ variant = "default" }) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  };

  if (variant === "sidebar") {
    return (
      <button
        type="button"
        onClick={handleLogout}
        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium text-white/45 hover:bg-white/[0.06] hover:text-white/70 transition-all"
      >
        <Icon name="arrow-right-on-rectangle" className="w-4 h-4" />
        Cerrar sesión
      </button>
    );
  }

  return (
    <button type="button" onClick={handleLogout} className="btn btn-outline text-[13px] py-2">
      Cerrar sesión
    </button>
  );
}
