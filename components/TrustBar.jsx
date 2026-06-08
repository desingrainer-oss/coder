"use client";

import { useState, useEffect } from "react";
import { AnimateOnMount } from "@/components/motion/Motion";
import Image from "next/image";
import Icon from "@/components/Icon";

const certifications = [
  { src: "/certifications/sales-cloud-consultant.png", name: "Sales Cloud Consultant", alt: "Salesforce Certified Sales Cloud Consultant" },
  { src: "/certifications/service-cloud-consultant.png", name: "Service Cloud Consultant", alt: "Salesforce Certified Service Cloud Consultant" },
  { src: "/certifications/data-cloud-consultant.png", name: "Data Cloud Consultant", alt: "Salesforce Certified Data Cloud Consultant" },
  { src: "/certifications/platform-developer-i.png", name: "Platform Developer I", alt: "Salesforce Certified Platform Developer I" },
  { src: "/certifications/marketing-cloud-consultant.png", name: "Marketing Cloud Consultant", alt: "Salesforce Certified Marketing Cloud Consultant" },
  { src: "/certifications/data-architect.png", name: "Data Architect", alt: "Salesforce Certified Data Architect" },
  { src: "/certifications/b2b-solution-architect.png", name: "B2B Solution Architect", alt: "Salesforce Certified B2B Solution Architect" },
  { src: "/certifications/b2c-solution-architect.png", name: "B2C Solution Architect", alt: "Salesforce Certified B2C Solution Architect" },
  { src: "/certifications/integration-architect.png", name: "Integration Architect", alt: "Salesforce Certified Integration Architect" },
  { src: "/certifications/marketing-cloud-email-specialist.png", name: "Marketing Cloud Email Specialist", alt: "Salesforce Certified Marketing Cloud Email Specialist" },
  { src: "/certifications/pardot-specialist.png", name: "Pardot Specialist", alt: "Salesforce Certified Pardot Specialist" },
  { src: "/certifications/education-cloud-consultant.png", name: "Education Cloud Consultant", alt: "Salesforce Certified Education Cloud Consultant" },
  { src: "/certifications/nonprofit-cloud-consultant.png", name: "Nonprofit Cloud Consultant", alt: "Salesforce Certified Nonprofit Cloud Consultant" },
  { src: "/certifications/financial-services-cloud.png", name: "Financial Services Cloud", alt: "Salesforce Accredited Financial Services Cloud" },
];

const featuredCerts = certifications.slice(0, 6);

const certPills = [
  { label: "Sales Cloud", color: "#00A1E0" },
  { label: "AI", color: "#8b5cf6" },
  { label: "Service Cloud", color: "#e91e8c" },
  { label: "Data Cloud", color: "#1797c0" },
  { label: "MuleSoft", color: "#00B3A4" },
];

const logos = [
  { name: "Grupo Impresor", className: "text-[12px] font-bold text-gray-600" },
  { name: "Ganac", className: "text-sm font-bold text-[#0d9488]" },
  { name: "Probemedic", className: "text-[12px] font-semibold text-gray-600" },
  { name: "Elohim", className: "text-sm font-bold italic text-gray-700" },
  { name: "Meylogistics", className: "text-[12px] font-bold text-[#c2410c]" },
  { name: "NeoRed", className: "text-sm font-bold text-[#4338ca]" },
  { name: "Sejo", className: "text-sm font-semibold text-gray-600" },
  { name: "BL Real Estate", className: "text-[11px] font-bold text-gray-700" },
  { name: "WeBuild", className: "text-sm font-extrabold text-navy" },
];

function CertModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-2xl shadow-card-lg border border-border w-full max-w-[720px] max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <div>
            <h2 className="text-lg font-extrabold text-navy">Certificaciones Salesforce</h2>
            <p className="text-xs text-text-3 mt-0.5">+15 certificaciones del equipo Coders Solution</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-bg border border-border text-text-3 hover:text-navy hover:bg-bg2 transition-colors flex items-center justify-center"
            aria-label="Cerrar"
          >
            <Icon name="xmark" className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.src}
                className="flex flex-col items-center gap-2.5 p-4 bg-bg rounded-xl border border-border hover:border-blue/30 hover:bg-[#f0f7ff] transition-colors"
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={64}
                  height={74}
                  className="h-[74px] w-auto object-contain"
                />
                <p className="text-[12px] font-semibold text-navy text-center leading-snug">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TrustBar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AnimateOnMount className="relative z-20 -mt-14 px-6 md:px-10 lg:px-12 mb-2" delay={0.35} y={32}>
        <div className="max-w-[1240px] mx-auto">
          <div className="bg-white rounded-[28px] border border-border/70 shadow-[0_-2px_20px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.07)] px-8 md:px-10 py-6 md:py-7 flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">
            {/* Partner Salesforce */}
            <div className="flex items-center justify-center lg:justify-start shrink-0 lg:pr-8 lg:border-r lg:border-border">
              <div className="text-center flex flex-col items-center min-w-[100px]">
                <Image
                  src="/salesforce-logo.png"
                  alt="Salesforce"
                  width={80}
                  height={28}
                  className="h-7 w-auto object-contain mb-1.5"
                />
                <div className="text-[12px] font-extrabold text-navy leading-tight tracking-tight">
                  PARTNER OFICIAL
                </div>
                <div className="text-[9px] text-text-3 font-medium tracking-wide mt-0.5">
                  SALESFORCE
                </div>
              </div>
            </div>

            {/* Certificaciones */}
            <div className="flex flex-col gap-2.5 min-w-0 flex-[0.9] lg:pl-6 lg:pr-6 lg:border-r lg:border-border">
              <span className="text-[10px] font-bold text-navy tracking-[0.08em] uppercase">
                +15 Certificaciones Salesforce
              </span>
              <div className="flex flex-wrap gap-2">
                {certPills.map((pill) => (
                  <span
                    key={pill.label}
                    className="text-[11px] font-semibold rounded-full py-1 px-3"
                    style={{ background: `${pill.color}18`, color: pill.color }}
                  >
                    {pill.label}
                  </span>
                ))}
              </div>
              <div className="flex items-end gap-6 flex-wrap mt-1">
                {featuredCerts.map((cert) => (
                  <div key={cert.src} className="shrink-0 cert-badge-wrap" title={cert.alt}>
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={40}
                      height={46}
                      className="h-11 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-[11px] font-semibold text-blue text-left hover:underline bg-transparent border-none p-0 cursor-pointer w-fit"
              >
                Ver todas las certificaciones →
              </button>
            </div>

            {/* Logos clientes */}
            <div className="flex flex-col justify-center min-w-0 flex-[1.15] lg:pl-5">
              <p className="text-[10px] font-bold text-navy tracking-[0.08em] uppercase mb-3">
                Empresas que confían en Coders Solution
              </p>
              <div className="flex items-center gap-5 md:gap-6 flex-wrap">
                {logos.map((logo) => (
                  <span
                    key={logo.name}
                    className={`tracking-tight transition-colors hover:text-navy whitespace-nowrap ${logo.className}`}
                  >
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimateOnMount>

      <CertModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
