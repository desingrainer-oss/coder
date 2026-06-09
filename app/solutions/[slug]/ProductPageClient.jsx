"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { AnimateIn } from "@/components/motion/Motion";
import { useChat } from "@/components/ChatContext";
import Icon, { CheckMark } from "@/components/Icon";

export default function ProductPageClient({ product }) {
  const { openChat } = useChat();
  const benefitIcons = product.benefits.slice(0, 4);

  return (
    <>
      <Navbar />

      <div className="py-2.5 px-4 sm:px-6 md:px-10 bg-bg border-b border-border text-[12.5px] text-text-3 flex flex-wrap items-center gap-1.5">
        <Link href="/" className="text-blue">Inicio</Link>
        <span className="text-gray-300">›</span>
        Soluciones
        <span className="text-gray-300">›</span>
        {product.title}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[300px] bg-white">
        <div className="py-10 md:py-[52px] px-4 sm:px-6 md:px-10 flex flex-col justify-center order-2 lg:order-1">
          <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-blue mb-3 block">{product.tag}</span>
          <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold text-navy mb-3.5 tracking-tight leading-tight">
            {product.title}
            <br />
            <span className="text-blue">con Coders Solution</span>
          </h1>
          <p className="text-[14.5px] text-text-2 max-w-[400px] leading-[1.65] mb-6">{product.desc}</p>
          <button className="btn btn-blue w-fit" onClick={() => openChat({ mode: "calendar" })}>Agenda una consultoría →</button>
        </div>
        <div className="sol-hero-right-bg relative py-8 px-4 sm:px-6 md:px-10 flex items-center justify-center bg-bg order-1 lg:order-2">
          <div className="bg-white border-[1.5px] border-border rounded-[14px] p-5 w-full max-w-[380px] shadow-card-lg">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-[10px] flex items-center justify-center text-lg"
                style={{ background: product.color }}
              >
                <Icon name={product.icon} className="w-5 h-5 text-blue" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-navy">{product.title}</div>
                <div className="text-[10.5px] text-gray-400">Coders Solution Partner</div>
              </div>
            </div>
            <div className="text-[11px] font-bold text-gray-700 mb-2.5">¿Qué incluye nuestra solución?</div>
            <div className="grid grid-cols-2 gap-1 mb-3.5">
              {product.what.map((w) => (
                <div key={w} className="flex items-start gap-1.5 mb-[5px]">
                  <CheckMark className="w-3.5 h-3.5 text-green shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-700 leading-snug">{w}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-border">
              <div className="text-[10.5px] font-bold text-gray-400 mb-2">TECNOLOGÍAS QUE INTEGRAMOS</div>
              <div className="flex flex-wrap gap-[5px]">
                {product.techs.map(([, name]) => (
                  <span
                    key={name}
                    className="bg-bg border border-border rounded-[5px] py-[3px] px-[9px] text-[10.5px] font-semibold text-gray-700"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] px-4 sm:px-6 md:px-10">
        <div className="lg:pr-8">
          <AnimateIn>
          <div className="py-12 border-b border-border">
            <h2 className="text-lg font-extrabold text-navy text-center mb-7">¿Qué problemas resolvemos?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {product.problems.map(([icon, text]) => (
                <div key={text} className="text-center">
                  <div className="w-11 h-11 rounded-[11px] bg-bg2 flex items-center justify-center mx-auto mb-2">
                    <Icon name={icon} className="w-5 h-5 text-blue" />
                  </div>
                  <p className="text-[11.5px] text-gray-700 font-medium leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="py-12 border-b border-border">
            <h2 className="text-lg font-extrabold text-navy text-center mb-7">¿Cómo ayudamos?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {product.how.map(([icon, title, desc]) => (
                <div key={title} className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mx-auto mb-2.5"
                    style={{ background: product.color }}
                  >
                    <Icon name={icon} className="w-6 h-6 text-blue" />
                  </div>
                  <h4 className="text-[12.5px] font-bold text-navy mb-[5px] leading-snug">{title}</h4>
                  <p className="text-[11.5px] text-text-3 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="py-12">
            <h2 className="text-lg font-extrabold text-navy text-center mb-7">Beneficios para tu negocio</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-8">
              {benefitIcons.map((b) => (
                <div key={b} className="bg-bg rounded-[10px] py-4 px-2.5 text-center">
                  <div className="mb-2 flex justify-center">
                    <Icon name="check-circle" className="w-7 h-7 text-green" solid />
                  </div>
                  <div className="text-[11.5px] font-semibold text-navy leading-snug">{b}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="bg-bg border-[1.5px] border-border rounded-[10px] p-[22px]">
                <h3 className="text-sm font-bold text-navy mb-3.5">Beneficios para tu negocio</h3>
                {product.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-[7px] mb-[7px]">
                    <CheckMark className="w-4 h-4 shrink-0 mt-px" />
                    <span className="text-[12.5px] text-gray-700 leading-snug">{b}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white border-[1.5px] border-border rounded-[10px] overflow-hidden">
                <div className="h-[72px] bg-gradient-to-br from-navy to-[#1e3a5f] flex items-center justify-center">
                  <div className="bg-white rounded-[5px] py-1 px-2.5 font-black text-sm text-navy">{product.caselogo}</div>
                </div>
                <div className="py-3.5 px-4">
                  <h4 className="text-[11px] font-bold text-gray-400 mb-2 uppercase tracking-wider">Caso de éxito destacado</h4>
                  <p className="text-xs text-text-2 leading-normal mb-2.5">{product.casetext}</p>
                  <Link href={`/casos-de-exito/${product.caseSlug}`} className="link-blue">Ver caso completo →</Link>
                </div>
              </div>
              <div className="cta-box bg-navy rounded-[10px] p-[22px] px-[18px] text-center relative overflow-hidden">
                <h3 className="text-[14.5px] font-extrabold text-white mb-2 leading-snug relative z-[1]">{product.ctaTitle}</h3>
                <p className="text-xs text-white/60 mb-4 leading-snug relative z-[1]">{product.ctaText}</p>
                <button className="btn btn-blue w-full justify-center relative z-[1]" onClick={() => openChat({ mode: "calendar" })}>
                  Agenda una consultoría →
                </button>
              </div>
            </div>
          </div>
          </AnimateIn>
        </div>

        <div className="hidden lg:block py-9 pl-6 border-l border-border sticky top-16 h-fit self-start">
          <div className="bg-white border-[1.5px] border-border rounded-[10px] p-4">
            <h4 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest mb-3">Tecnologías relacionadas</h4>
            {product.techs.map(([color, name]) => (
              <div
                key={name}
                className="flex items-center gap-2 py-[7px] border-b border-gray-100 last:border-b-0 text-[12.5px] font-semibold text-navy cursor-pointer transition-colors hover:text-blue"
              >
                <div className="w-[9px] h-[9px] rounded-[3px] shrink-0" style={{ background: color }} />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner
        title="Hablemos de tu implementación Salesforce"
        description="Agenda una sesión con nuestro equipo y descubre cómo optimizar tu operación con Salesforce."
        buttonText="Agenda una consultoría →"
        showPartnerBox={false}
      />
      <Footer />
    </>
  );
}
