"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import { AnimateIn } from "@/components/motion/Motion";
import Footer from "./Footer";
import CtaBanner from "./CtaBanner";
import { useChat } from "./ChatContext";
import Icon, { CheckMark } from "./Icon";

function StrategyHeroCard() {
  const items = [
    { icon: "map", title: "Salesforce Roadmap", sub: "Estrategia 12–18 meses", status: "Activo", statusColor: "text-green bg-[#dcfce7]" },
    { icon: "magnifying-glass", title: "Business Assessment", sub: "Análisis de procesos", status: "En curso", statusColor: "text-blue bg-[#dbeafe]" },
    { icon: "cube", title: "Solution Architecture", sub: "Diseño de solución", status: "Pendiente", statusColor: "text-gray-400 bg-gray-100" },
    { icon: "arrow-path", title: "Digital Transformation", sub: "Optimización operativa", status: "Pendiente", statusColor: "text-gray-400 bg-gray-100" },
  ];
  return (
    <div className="bg-white border-[1.5px] border-border rounded-[14px] p-5 w-full max-w-[380px] shadow-card-lg">
      <div className="text-[11px] font-bold text-gray-400 mb-3.5 tracking-widest">ESTRATEGIA SALESFORCE</div>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item.title} className="bg-bg rounded-lg p-3 flex items-center gap-2.5">
            <Icon name={item.icon} className="w-5 h-5 text-blue shrink-0" />
            <div>
              <div className="text-xs font-bold text-navy">{item.title}</div>
              <div className="text-[11px] text-text-3">{item.sub}</div>
            </div>
            <span className={`ml-auto text-[10px] font-semibold py-0.5 px-2 rounded ${item.statusColor}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImplementationHeroCard() {
  return (
    <div className="bg-white border-[1.5px] border-border rounded-[14px] p-5 w-full max-w-[400px] shadow-card-lg">
      <div className="flex items-center justify-between mb-3.5">
        <span className="text-xs font-bold text-navy">Sales Overview</span>
        <div className="flex gap-[3px]">
          <div className="w-4 h-[3px] rounded-sm bg-blue" />
          <div className="w-4 h-[3px] rounded-sm bg-border" />
          <div className="w-4 h-[3px] rounded-sm bg-border" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5 mb-3.5">
        <div><span className="text-[9px] text-gray-400 block">Pipeline</span><div className="text-xl font-extrabold text-navy leading-none">$7.6M</div><div className="text-[9.5px] text-green font-semibold">+18% ↑</div></div>
        <div><span className="text-[9px] text-gray-400 block">Meta alcanzada</span><div className="text-xl font-extrabold text-navy leading-none">76%</div></div>
        <div><span className="text-[9px] text-gray-400 block">Incidencias abiertas</span><div className="text-xl font-extrabold text-red leading-none">18</div></div>
      </div>
      <svg viewBox="0 0 200 50" className="w-full h-9 mb-3">
        <polyline points="0,45 30,35 60,30 90,18 120,22 150,10 180,6 200,8" fill="none" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="bg-bg rounded-lg p-2.5">
        <div className="text-[9px] font-bold text-gray-400 mb-1.5">Actividad reciente</div>
        <div className="flex items-center gap-1.5 text-[10px] text-navy mb-[3px]">
          <span className="w-2 h-2 rounded-full bg-green shrink-0" /> Nueva oportunidad – Acme Corp – $75,000
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-navy mb-[3px]">
          <span className="w-2 h-2 rounded-full bg-blue shrink-0" /> Reunión agendada – Tech Solutions
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-navy">
          <span className="w-2 h-2 rounded-full bg-orange shrink-0" /> Propuesta enviada – Global Manufacturing
        </div>
        <a href="#" className="text-[9.5px] text-blue font-semibold block mt-1.5">Ver todas →</a>
      </div>
    </div>
  );
}

function ManagedHeroCard() {
  return (
    <div className="bg-white border-[1.5px] border-border rounded-[14px] p-5 w-full max-w-[400px] shadow-card-lg">
      <div className="text-xs font-bold text-navy mb-3.5">Service Performance</div>
      <div className="grid grid-cols-2 gap-4 mb-3.5">
        <div>
          <div className="text-[9.5px] text-gray-400">Casos resueltos</div>
          <div className="text-[28px] font-extrabold text-navy leading-tight">1,250</div>
          <div className="text-[9.5px] text-green font-semibold">+24% vs anterior</div>
        </div>
        <div>
          <div className="text-[9.5px] text-gray-400">Tiempo prom. respuesta</div>
          <div className="text-[28px] font-extrabold text-navy leading-tight">2.4 hrs</div>
          <div className="text-[9.5px] text-green font-semibold">-18% vs anterior</div>
        </div>
      </div>
      <div className="flex items-center gap-3.5 pt-3 border-t border-border">
        <div className="w-[52px] h-[52px] rounded-full border-4 border-green flex items-center justify-center shrink-0 text-[13px] font-extrabold text-navy">92%</div>
        <div>
          <div className="text-xs font-bold text-navy">Satisfacción del cliente</div>
          <div className="text-[10.5px] text-green font-semibold">Excelente</div>
        </div>
        <div className="ml-auto text-right">
          <div className="text-[9px] text-gray-400">Incidencias abiertas</div>
          <div className="text-[22px] font-extrabold text-navy">18</div>
        </div>
      </div>
      <svg viewBox="0 0 200 35" className="w-full h-7 mt-2.5">
        <polyline points="0,28 20,26 40,22 60,24 80,18 100,20 120,13 140,16 160,9 180,11 200,7" fill="none" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3,2" />
      </svg>
    </div>
  );
}

const heroCards = {
  strategy: StrategyHeroCard,
  implementation: ImplementationHeroCard,
  managed: ManagedHeroCard,
};

export default function ServicePage({ data }) {
  const { openChat } = useChat();
  const HeroCard = heroCards[data.heroCard];

  return (
    <>
      <Navbar />
      <div className="py-2.5 px-4 sm:px-6 md:px-10 bg-bg border-b border-border text-[12.5px] text-text-3 flex flex-wrap items-center gap-1.5">
        <Link href="/" className="text-blue">Inicio</Link>
        <span className="text-gray-300">›</span>
        <Link href="/" className="text-blue">Cómo ayudamos</Link>
        <span className="text-gray-300">›</span>
        {data.breadcrumb}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[300px] bg-white">
        <div className="py-10 md:py-[52px] px-4 sm:px-6 md:px-10 flex flex-col justify-center order-2 lg:order-1">
          <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-blue mb-3 block">{data.tag}</span>
          <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold text-navy mb-3.5 tracking-tight leading-tight">{data.title}</h1>
          <p className="text-[14.5px] text-text-2 max-w-[400px] leading-[1.65] mb-6">{data.desc}</p>
          <button className="btn btn-blue w-fit" onClick={() => openChat({ mode: "calendar" })}>Agenda una consultoría →</button>
        </div>
        <div className="sol-hero-right-bg relative py-8 px-4 sm:px-6 md:px-10 flex items-center justify-center bg-bg order-1 lg:order-2">
          <HeroCard />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] px-4 sm:px-6 md:px-10">
        <div className="lg:pr-8">
          <AnimateIn>
          <div className="py-12 border-b border-border">
            <h2 className="text-lg font-extrabold text-navy text-center mb-4">¿Qué hacemos?</h2>
            <p className="text-[14.5px] text-text-2 text-center max-w-[720px] mx-auto leading-[1.7]">
              {data.whatWeDo}
            </p>
          </div>

          <div className="py-12 border-b border-border">
            <h2 className="text-lg font-extrabold text-navy text-center mb-7">¿Qué problemas resolvemos?</h2>
            <div className={`grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${data.problems.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-6"}`}>
              {data.problems.map(([icon, text]) => (
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
            <div className={`grid gap-4 grid-cols-2 sm:grid-cols-3 ${data.helpCols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"}`}>
              {data.help.map((item) => {
                const bg = item[3] || "#dbeafe";
                return (
                  <div key={item[1]} className="text-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2.5" style={{ background: bg }}>
                      <Icon name={item[0]} className="w-6 h-6 text-blue" />
                    </div>
                    <h4 className="text-[12.5px] font-bold text-navy mb-[5px] leading-snug">{item[1]}</h4>
                    <p className="text-[11.5px] text-text-3 leading-snug">{item[2]}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="py-12">
            {data.sidebarTechs?.length > 0 && (
              <>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-center mb-4">
                  Tecnologías relacionadas
                </div>
                <div className="flex flex-wrap gap-2 justify-center mb-10">
                  {data.sidebarTechs.map(([color, label]) => (
                    <span
                      key={label}
                      className="text-xs font-semibold rounded-md py-[5px] px-3.5"
                      style={{ background: `${color}18`, color }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="bg-bg border-[1.5px] border-border rounded-[10px] p-[22px]">
                <h3 className="text-sm font-bold text-navy mb-3.5">Beneficios para tu negocio</h3>
                {data.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-[7px] mb-[7px]">
                    <CheckMark className="w-4 h-4 shrink-0 mt-px" />
                    <span className="text-[12.5px] text-gray-700 leading-snug">{b}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white border-[1.5px] border-border rounded-[10px] overflow-hidden">
                <div className={`h-[72px] flex items-center justify-center ${data.caseGradient ? "bg-gradient-to-br from-[#1e1b4b] to-[#3730a3]" : "bg-gradient-to-br from-navy to-[#1e3a5f]"}`}>
                  <div className="bg-white rounded-[5px] py-1 px-2.5 font-black text-sm text-navy">{data.caseLogo}</div>
                </div>
                <div className="py-3.5 px-4">
                  <h4 className="text-[11px] font-bold text-gray-400 mb-2 uppercase tracking-wider">Caso de éxito destacado</h4>
                  <p className="text-xs text-text-2 leading-normal mb-2.5">{data.caseText}</p>
                  <Link href={`/casos-de-exito/${data.caseSlug}`} className="link-blue">Ver caso completo →</Link>
                </div>
              </div>
              <div className="cta-box bg-navy rounded-[10px] p-[22px] px-[18px] text-center relative overflow-hidden">
                <h3 className="text-[14.5px] font-extrabold text-white mb-2 leading-snug relative z-[1]">{data.ctaBoxTitle}</h3>
                <p className="text-xs text-white/60 mb-4 leading-snug relative z-[1]">{data.ctaBoxText}</p>
                <button className="btn btn-blue w-full justify-center relative z-[1]" onClick={() => openChat({ mode: "calendar" })}>Agenda una consultoría →</button>
              </div>
            </div>
          </div>
          </AnimateIn>
        </div>

        <div className="hidden lg:block py-9 pl-6 border-l border-border sticky top-16 h-fit self-start">
          <div className="bg-white border-[1.5px] border-border rounded-[10px] p-4 mb-3.5">
            <h4 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest mb-3">Tecnologías relacionadas</h4>
            {data.sidebarTechs.map(([color, name]) => (
              <div key={name} className="flex items-center gap-2 py-[7px] border-b border-gray-100 last:border-b-0 text-[12.5px] font-semibold text-navy cursor-pointer transition-colors hover:text-blue">
                <div className="w-[9px] h-[9px] rounded-[3px] shrink-0" style={{ background: color }} />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner
        title={data.bannerTitle}
        description={data.bannerText}
        buttonText="Agenda una consultoría →"
        showPartnerBox={false}
      />
      <Footer compact />
    </>
  );
}
