"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { useChat } from "@/components/ChatContext";
import { CheckMark } from "@/components/Icon";

export default function CaseStudyPage({ study }) {
  const { openChat } = useChat();

  return (
    <>
      <Navbar />

      <div className="py-2.5 px-10 bg-bg border-b border-border text-[12.5px] text-text-3 flex items-center gap-1.5">
        <Link href="/" className="text-blue">Inicio</Link>
        <span className="text-gray-300">›</span>
        <Link href="/casos-de-exito" className="text-blue">Casos de éxito</Link>
        <span className="text-gray-300">›</span>
        {study.client}
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: study.gradient }} />
        <div className="relative z-[1] py-16 px-10 text-center">
          <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/20 rounded-full py-1 px-3 text-[10px] font-semibold text-white tracking-wider mb-4">
            {study.tag}
          </span>
          <div className={`inline-block bg-white rounded-lg py-2 px-5 font-black text-xl text-navy mb-6 ${study.logoSize}`}>
            {study.logo}
          </div>
          <h1 className="text-[36px] font-extrabold text-white mb-4 tracking-tight leading-tight max-w-[700px] mx-auto">
            {study.title}
          </h1>
          <p className="text-[15px] text-white/75 max-w-[560px] mx-auto leading-relaxed">
            {study.summary}
          </p>
        </div>
      </div>

      <div className="bg-navy grid grid-cols-3 divide-x divide-white/[0.08]">
        {study.metrics.map((m) => (
          <div key={m.l} className="py-8 px-6 text-center">
            <div className="text-[36px] font-extrabold text-blue-light leading-none">{m.v}</div>
            <div className="text-[13px] text-white/55 mt-2">{m.l}</div>
          </div>
        ))}
      </div>

      <div className="py-[72px] px-10">
        <div className="grid grid-cols-[1fr_280px] gap-10 max-w-[1100px] mx-auto">
          <div>
            <section className="mb-10">
              <h2 className="text-xl font-extrabold text-navy mb-4">El desafío</h2>
              <p className="text-[14.5px] text-text-2 leading-[1.7]">{study.challenge}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-extrabold text-navy mb-4">Nuestro enfoque</h2>
              <ul className="flex flex-col gap-3">
                {study.approach.map((item, i) => (
                  <li key={item} className="flex gap-3 text-[14px] text-text-2 leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-blue/10 text-blue text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-extrabold text-navy mb-4">Resultados</h2>
              <ul className="flex flex-col gap-2.5">
                {study.results.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[14px] text-text-2 leading-relaxed">
                    <CheckMark className="w-4 h-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <blockquote className="border-l-4 border-blue pl-5 py-2">
              <p className="text-[15px] text-navy italic leading-relaxed mb-2">&ldquo;{study.quote}&rdquo;</p>
              <cite className="text-[13px] text-text-3 not-italic">— {study.quoteAuthor}</cite>
            </blockquote>
          </div>

          <aside className="flex flex-col gap-4">
            <div className="bg-bg border-[1.5px] border-border rounded-[10px] p-5 sticky top-20">
              <h4 className="text-[11px] font-bold text-gray-400 mb-3 uppercase tracking-wider">Detalles del proyecto</h4>
              {[
                ["Cliente", study.client],
                ["Industria", study.industry],
                ["Solución", study.solution],
                ["Duración", study.duration],
              ].map(([label, value]) => (
                <div key={label} className="mb-3 last:mb-0">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">{label}</div>
                  <div className="text-[13px] font-semibold text-navy">{value}</div>
                </div>
              ))}
              <button className="btn btn-blue w-full mt-4" onClick={() => openChat({ mode: "calendar" })}>
                Agenda una consultoría →
              </button>
            </div>
          </aside>
        </div>
      </div>

      <CtaBanner
        title="¿Quieres resultados similares?"
        description={`Conversemos sobre cómo podemos ayudarte con ${study.solution} como lo hicimos con ${study.client}.`}
        buttonText="Agenda una demo →"
        showPartnerBox={false}
      />
      <Footer />
    </>
  );
}
