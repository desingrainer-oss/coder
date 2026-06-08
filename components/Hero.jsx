"use client";

import Image from "next/image";
import Link from "next/link";
import { useChat } from "./ChatContext";
import { AnimateOnMount } from "@/components/motion/Motion";

const pipelineStages = [
  { label: "Prospección", width: "78%", color: "#1a73e8" },
  { label: "Calificación", width: "92%", color: "#4a9eff" },
  { label: "Propuesta", width: "65%", color: "#1a73e8" },
  { label: "Negociación", width: "50%", color: "#22c55e" },
  { label: "Cierre", width: "30%", color: "#14b8a6" },
];

const activities = [
  { color: "#22c55e", letter: "N", title: "Nueva oportunidad", sub: "Acme Corp – $75,000" },
  { color: "#1a73e8", letter: "R", title: "Reunión agendada", sub: "Tech Solutions" },
  { color: "#f59e0b", letter: "P", title: "Propuesta enviada", sub: "Global Manufacturing" },
];

export default function Hero() {
  const { openChat } = useChat();

  return (
    <div className="grid grid-cols-2 min-h-[484px] relative overflow-hidden bg-white -mt-16 pt-16 pb-20">
      {/* Background image */}
      <Image
        src="/hero-bg.webp"
        alt=""
        fill
        priority
        className="object-cover object-right pointer-events-none select-none"
        sizes="100vw"
      />

      {/* Left column */}
      <AnimateOnMount className="py-16 pl-10 pr-12 flex flex-col justify-center relative z-[2]" delay={0.1}>
        <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.2px] text-text-3 uppercase mb-[18px]">
          <span>PARTNER OFICIAL DE</span>
          <span className="inline-flex items-center gap-1 text-sf-blue font-extrabold">
            SALESFORCE
            <Image
              src="/salesforce-logo.png"
              alt="Salesforce"
              width={96}
              height={32}
              priority
              className="h-7 w-auto object-contain shrink-0"
            />
          </span>
        </div>

        <h1 className="text-[42px] font-extrabold leading-[1.1] text-navy mb-[18px] tracking-tight">
          Transformamos procesos
          <br />
          comerciales con <span className="text-blue">Salesforce.</span>
        </h1>

        <p className="text-[15px] text-text-2 max-w-[420px] leading-[1.65] mb-8">
          En Coders Solution ayudamos a empresas a implementar, optimizar y escalar Salesforce
          para aumentar ventas, automatizar operaciones y mejorar la experiencia del cliente.
        </p>

        <div className="flex gap-3">
          <Link href="/casos-de-exito" className="btn btn-outline">
            Ver casos de éxito
          </Link>
          <button className="btn btn-navy" onClick={() => openChat({ mode: "calendar" })}>
            Agenda una demo →
          </button>
        </div>
      </AnimateOnMount>

      {/* Right column – dashboard + phone mockup */}
      <AnimateOnMount className="relative flex items-center justify-center py-10 px-8 overflow-hidden z-[2]" delay={0.25}>
        <div className="relative flex items-center gap-4 w-full max-w-[520px]">
          {/* Main dashboard card */}
          <div className="flex-1 bg-white rounded-xl shadow-card-lg border border-border/60 overflow-hidden p-4 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/salesforce-logo.png"
                alt="Salesforce"
                width={26}
                height={26}
                className="h-[26px] w-auto object-contain shrink-0"
              />
              <span className="text-xs font-bold text-navy">Resumen de ventas</span>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3 pb-3 border-b border-gray-100">
              {[
                { lbl: "Oportunidades", val: "$2.8M", chg: "+24% ↑" },
                { lbl: "Pipeline", val: "$7.6M", chg: "+18% ↑" },
                { lbl: "Conversión", val: "34%", chg: "+12% ↑" },
              ].map((m) => (
                <div key={m.lbl}>
                  <div className="text-[9px] text-gray-400 mb-0.5">{m.lbl}</div>
                  <div className="text-base font-extrabold text-navy leading-none">{m.val}</div>
                  <div className="text-[9px] text-green font-semibold">{m.chg}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <h5 className="text-[9px] font-bold text-gray-700 mb-2">Pipeline por etapa</h5>
                {pipelineStages.map((s) => (
                  <div key={s.label} className="flex items-center gap-1 mb-1">
                    <span className="text-[8px] text-gray-400 w-14 shrink-0 truncate">{s.label}</span>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-sm overflow-hidden">
                      <div className="h-full rounded-sm" style={{ width: s.width, background: s.color }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center">
                <h5 className="text-[9px] font-bold text-gray-700 mb-2 self-start w-full">Oportunidades por origen</h5>
                <svg viewBox="0 0 80 80" className="w-[72px] h-[72px]">
                  <circle cx="40" cy="40" r="28" fill="none" stroke="#f3f4f6" strokeWidth="12" />
                  <circle cx="40" cy="40" r="28" fill="none" stroke="#1a73e8" strokeWidth="12" strokeDasharray="88 176" strokeDashoffset="0" transform="rotate(-90 40 40)" />
                  <circle cx="40" cy="40" r="28" fill="none" stroke="#4a9eff" strokeWidth="12" strokeDasharray="44 176" strokeDashoffset="-88" transform="rotate(-90 40 40)" />
                  <circle cx="40" cy="40" r="28" fill="none" stroke="#22c55e" strokeWidth="12" strokeDasharray="33 176" strokeDashoffset="-132" transform="rotate(-90 40 40)" />
                </svg>
                <div className="flex flex-wrap gap-1 mt-1 justify-center">
                  {[
                    { c: "#1a73e8", l: "Web" },
                    { c: "#4a9eff", l: "Referido" },
                    { c: "#22c55e", l: "Evento" },
                  ].map((item) => (
                    <span key={item.l} className="text-[7px] text-gray-500 flex items-center gap-0.5">
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: item.c }} />
                      {item.l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Phone mockup – Actividad reciente */}
          <div className="w-[148px] shrink-0 bg-white rounded-[20px] shadow-card-lg border-[3px] border-gray-800 overflow-hidden">
            <div className="h-5 bg-gray-800 flex items-center justify-center">
              <div className="w-8 h-1 bg-gray-600 rounded-full" />
            </div>
            <div className="p-2.5">
              <div className="text-[9px] font-bold text-navy mb-2">Actividad reciente</div>
              {activities.map((a) => (
                <div key={a.title} className="flex gap-1.5 mb-2">
                  <div
                    className="w-4 h-4 rounded-[4px] shrink-0 flex items-center justify-center text-[6px] font-bold text-white"
                    style={{ background: a.color }}
                  >
                    {a.letter}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[7.5px] font-bold text-navy leading-tight truncate">{a.title}</div>
                    <div className="text-[7px] text-gray-400 truncate">{a.sub}</div>
                  </div>
                </div>
              ))}
              <a href="#" className="text-[7.5px] text-blue font-semibold block mt-1">
                Ver todas →
              </a>
            </div>
          </div>
        </div>
      </AnimateOnMount>
    </div>
  );
}
