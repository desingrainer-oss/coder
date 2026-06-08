"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

const features = [
  { icon: "pencil-square", text: "Editor de artículos con vista previa SEO" },
  { icon: "folder", text: "Organización por categorías" },
  { icon: "rocket-launch", text: "Publicación instantánea en el blog" },
];

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin/blog");
      router.refresh();
    } else {
      setError("Contraseña incorrecta. Inténtalo de nuevo.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-navy relative overflow-hidden flex flex-col justify-between p-10 lg:p-14">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00b4d8] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="relative z-[1]">
          <Image
            src="/logo-coders.webp"
            alt="Coders Solution"
            width={160}
            height={56}
            className="h-10 w-auto object-contain brightness-0 invert mb-8"
            priority
          />
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-blue-light mb-4">
            Panel CMS
          </p>
          <h1 className="text-[32px] font-extrabold text-white leading-tight tracking-tight mb-4">
            Gestiona el contenido
            <br />
            <span className="text-blue-light">de tu sitio web.</span>
          </h1>
          <p className="text-[14px] text-white/55 max-w-[340px] leading-relaxed">
            Crea, edita y publica artículos del blog sin necesidad de acceder al código.
            Todo desde un panel seguro y fácil de usar.
          </p>
        </div>

        <div className="relative z-[1] flex flex-col gap-3">
          {features.map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Icon name={item.icon} className="w-4 h-4 text-white/80" />
              </span>
              <span className="text-[13px] text-white/60">{item.text}</span>
            </div>
          ))}
        </div>

        <p className="relative z-[1] text-[11px] text-white/30 mt-8">
          © 2025 Coders Solution · Partner Oficial Salesforce
        </p>
      </div>

      <div className="bg-bg flex items-center justify-center p-8">
        <div className="w-full max-w-[380px]">
          <div className="mb-8">
            <h2 className="text-[22px] font-extrabold text-navy mb-1">Iniciar sesión</h2>
            <p className="text-[13px] text-text-3">
              Accede al panel de administración del blog
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border-[1.5px] border-border rounded-[10px] p-7 shadow-card-lg"
          >
            <label className="block text-[12px] font-semibold text-navy mb-1.5">
              Contraseña de acceso
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input w-full mb-1"
              placeholder="Introduce tu contraseña"
              required
              autoFocus
            />
            <p className="text-[11px] text-text-3 mb-5">
              Contacta al administrador si no tienes acceso.
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg py-2.5 px-3 mb-4">
                <p className="text-[12px] text-red-600 font-medium">{error}</p>
              </div>
            )}

            <button type="submit" className="btn btn-blue w-full justify-center" disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verificando...
                </span>
              ) : (
                "Entrar al panel →"
              )}
            </button>
          </form>

          <p className="text-center mt-6">
            <Link href="/" className="text-[13px] text-blue font-semibold hover:underline">
              ← Volver al sitio web
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
