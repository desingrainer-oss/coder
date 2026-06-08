"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

function SfCloudIcon() {
  return (
    <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-white">
      <path d="M10 2a5.5 5.5 0 00-4.9 8A4 4 0 007 18h9a3.5 3.5 0 001.4-6.7A5.5 5.5 0 0010 2z" />
    </svg>
  );
}

const tabs = [
  { id: "crm", label: "CRM & Revenue", icon: "chart-bar" },
  { id: "cx", label: "Customer Experience", icon: "user" },
  { id: "industry", label: "Industrias", icon: "building-office" },
];

const tabContent = {
  crm: {
    services: [
      { slug: "sales-cloud", icon: "cloud", iconBg: "#dbeafe", title: "Sales Cloud", desc: "Automatiza tu proceso comercial, gestiona oportunidades y aumenta la visibilidad de ventas." },
      { slug: "service-cloud", icon: "heart", iconBg: "#fce7f3", title: "Service Cloud", desc: "Centraliza la atención al cliente y mejora la experiencia con servicio omnicanal." },
    ],
    note: "Impulsamos tu operación comercial con una visión 360° del cliente, procesos eficientes y equipos más productivos.",
    dash: "crm",
  },
  cx: {
    services: [
      { slug: "experience-cloud", icon: "globe-alt", iconBg: "#d1faf4", title: "Experience Cloud", desc: "Conecta a tus clientes, partners y equipos en experiencias digitales seguras e integradas con Salesforce." },
      { slug: "marketing-cloud", icon: "megaphone", iconBg: "#fff7ed", title: "Marketing Cloud", desc: "Automatiza campañas y crea journeys personalizados que generan resultados medibles." },
      { slug: "commerce-cloud", icon: "shopping-cart", iconBg: "#f0fdf4", title: "Commerce Cloud", desc: "Desarrolla experiencias de comercio digital conectadas y optimizadas con Salesforce." },
    ],
    dash: "cx",
  },
  industry: {
    services: [
      { slug: "financial-services-cloud", icon: "building-library", iconBg: "#e0f2fe", title: "Financial Services Cloud", desc: "Solución especializada para bancos, aseguradoras y fintechs con cumplimiento y onboarding digital." },
      { slug: "manufacturing-cloud", icon: "building-office", iconBg: "#fef3c7", title: "Manufacturing Cloud", desc: "Forecasting colaborativo, gestión de partners y visibilidad de cadena de suministro." },
    ],
    dash: "industry",
  },
};

const pipelineData = [
  { label: "Prospección", width: "80%", color: "#1a73e8", count: 35 },
  { label: "Calificación", width: "65%", color: "#4a9eff", count: 28 },
  { label: "Propuesta", width: "55%", color: "#1a73e8", count: 24 },
  { label: "Negociación", width: "40%", color: "#22c55e", count: 18 },
  { label: "Cierre", width: "50%", color: "#14b8a6", count: 23 },
];

function DashPanel({ type }) {
  if (type === "crm") {
    return (
      <>
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-[22px] h-[22px] rounded-[5px] bg-sf-blue flex items-center justify-center">
            <SfCloudIcon />
          </div>
          <span className="text-[11px] font-bold text-navy">salesforce</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { label: "Pipeline de Ventas", v: "$2.4M", s: "Valor total" },
            { label: "Oportunidades", v: "128", s: "En curso" },
            { label: "Conversión", v: "35%", s: "Ratio" },
          ].map((m) => (
            <div key={m.label}>
              <label className="text-[8.5px] text-gray-400 block mb-px">{m.label}</label>
              <div className="text-[17px] font-extrabold text-navy leading-none">{m.v}</div>
              <div className="text-[8px] text-gray-400">{m.s}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <h6 className="text-[9px] font-bold text-gray-700 mb-1.5">Etapas del Pipeline</h6>
            {pipelineData.map((r) => (
              <div key={r.label} className="flex items-center gap-1 mb-[3px]">
                <span className="text-[8px] text-gray-400 w-[58px] shrink-0">{r.label}</span>
                <div className="flex-1 h-1 bg-gray-100 rounded-sm overflow-hidden">
                  <div className="h-1 rounded-sm" style={{ width: r.width, background: r.color }} />
                </div>
                <span className="text-[8px] font-semibold text-gray-700 ml-auto">{r.count}</span>
              </div>
            ))}
          </div>
          <div>
            <h6 className="text-[9px] font-bold text-gray-700 mb-1.5">Actividad del Equipo</h6>
            <svg viewBox="0 0 80 45" className="w-full h-[50px]">
              <defs>
                <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1a73e8" stopOpacity=".15" />
                  <stop offset="100%" stopColor="#1a73e8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points="0,45 0,40 12,32 24,28 36,20 48,15 60,8 72,4 80,6 80,45" fill="url(#ag)" />
              <polyline points="0,40 12,32 24,28 36,20 48,15 60,8 72,4 80,6" fill="none" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </>
    );
  }

  if (type === "cx") {
    const channels = [
      { name: "Email", width: "82%", color: "#1a73e8", pct: "82%" },
      { name: "WhatsApp", width: "65%", color: "#22c55e", pct: "65%" },
      { name: "Chat Web", width: "48%", color: "#8b5cf6", pct: "48%" },
    ];
    return (
      <>
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-[22px] h-[22px] rounded-[5px] bg-sf-blue flex items-center justify-center">
            <SfCloudIcon />
          </div>
          <span className="text-[11px] font-bold text-navy">Customer 360</span>
        </div>
        <div className="text-[10px] font-bold text-gray-700 mb-2.5">Canales activos</div>
        <div className="flex flex-col gap-1.5">
          {channels.map((c) => (
            <div key={c.name} className="flex items-center gap-1.5">
              <span className="text-[9px] text-gray-400 w-16">{c.name}</span>
              <div className="flex-1 h-[5px] bg-gray-100 rounded-sm overflow-hidden">
                <div className="h-[5px] rounded-sm" style={{ width: c.width, background: c.color }} />
              </div>
              <span className="text-[9px] font-semibold">{c.pct}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-2.5 border-t border-gray-100">
          <div className="text-[9px] text-gray-400 mb-1">CSAT Score</div>
          <div className="text-[22px] font-extrabold text-navy">
            4.8 <span className="text-xs text-gray-400">/5</span>
          </div>
          <div className="text-[9px] text-green font-semibold">↑ +0.3 vs anterior</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-[22px] h-[22px] rounded-[5px] bg-sf-blue flex items-center justify-center">
          <SfCloudIcon />
        </div>
        <span className="text-[11px] font-bold text-navy">Industry Cloud</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { label: "Forecast precisión", v: "94%", s: "vs 72% anterior" },
          { label: "Partners activos", v: "48", s: "En portal" },
        ].map((m) => (
          <div key={m.label}>
            <label className="text-[8.5px] text-gray-400 block mb-px">{m.label}</label>
            <div className="text-[17px] font-extrabold text-navy leading-none">{m.v}</div>
            <div className="text-[8px] text-gray-400">{m.s}</div>
          </div>
        ))}
      </div>
      <div className="text-[9px] text-gray-400">Soluciones verticales para finanzas y manufactura</div>
    </>
  );
}

export default function EcosystemTabs() {
  const [activeTab, setActiveTab] = useState("crm");
  const content = tabContent[activeTab];

  return (
    <div className="py-[72px] px-10 bg-bg">
      <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-blue mb-2.5 text-center">
        ECOSISTEMA SALESFORCE
      </p>
      <h2 className="text-[32px] font-extrabold text-navy mb-3 tracking-tight text-center">
        Soluciones conectadas.
        <br />
        <span className="text-blue">Resultados reales.</span>
      </h2>
      <p className="text-[15px] text-text-2 max-w-[600px] mx-auto mb-11 leading-[1.65] text-center">
        Implementamos y optimizamos las soluciones Salesforce que tu empresa necesita para crecer,
        automatizar y entregar experiencias excepcionales.
      </p>

      <div className="flex gap-0 border-b-2 border-border mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-[7px] py-3.5 px-7 text-[13.5px] font-semibold cursor-pointer border-b-[3px] -mb-0.5 transition-all duration-[180ms] ${
              activeTab === tab.id
                ? "text-blue border-blue"
                : "text-text-3 border-transparent hover:text-blue"
            }`}
          >
            <Icon name={tab.icon} className="w-4 h-4" /> {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-6">
        <div className="flex flex-col gap-4">
          {content.services.map((svc) => (
            <div
              key={svc.slug}
              className="flex items-start gap-4 bg-bg border-[1.5px] border-border rounded-[10px] p-[18px] transition-all duration-200 hover:border-[#c7d7f8] hover:bg-[#f0f7ff]"
            >
              <div
                className="w-11 h-11 rounded-[10px] shrink-0 flex items-center justify-center"
                style={{ background: svc.iconBg }}
              >
                <Icon name={svc.icon} className="w-5 h-5 text-blue" />
              </div>
              <div>
                <h4 className="text-[14.5px] font-bold text-navy mb-[5px]">{svc.title}</h4>
                <p className="text-[12.5px] text-text-2 leading-normal mb-2">{svc.desc}</p>
                <Link href={`/solutions/${svc.slug}`} className="link-blue">
                  Saber más →
                </Link>
              </div>
            </div>
          ))}
          {content.note && (
            <div className="flex items-start gap-2.5 bg-bg2 border-[1.5px] border-border rounded-[10px] p-3.5">
              <div className="w-8 h-8 rounded-lg bg-blue/10 flex items-center justify-center shrink-0">
                <Icon name="user-group" className="w-4 h-4 text-blue" />
              </div>
              <p className="text-[12.5px] text-gray-700 leading-normal">{content.note}</p>
            </div>
          )}
        </div>

        <div className="bg-white border-[1.5px] border-border rounded-[10px] p-4 shadow-card">
          <DashPanel type={content.dash} />
        </div>
      </div>
    </div>
  );
}
