"use client";

import Image from "next/image";
import { useChat } from "./ChatContext";
import { AnimateIn } from "@/components/motion/Motion";

const CTA_BG =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80&auto=format&fit=crop";

export default function CtaBanner({
  title = "Hablemos de tu proyecto",
  description = "Agenda una consultoría gratuita con nuestros expertos y descubre cómo Salesforce puede impulsar tu negocio.",
  buttonText = "Agenda una consultoría →",
  showPartnerBox = true,
  partnerSince = "2016",
}) {
  const { openChat } = useChat();

  return (
    <section id="contacto" className="px-6 md:px-10 py-12 bg-white">
      <AnimateIn y={20}>
        <div className="relative max-w-[1240px] mx-auto rounded-[24px] overflow-hidden min-h-[220px]">
        <Image
          src={CTA_BG}
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 1240px) 100vw, 1240px"
        />
        <div className="absolute inset-0 bg-[#0a1628]/88" />

        <div className="relative z-[1] flex items-center justify-between gap-8 py-11 px-8 md:px-12 lg:px-14">
          <div className="max-w-[560px]">
            <h2 className="text-[26px] md:text-[28px] font-extrabold text-white mb-2.5 tracking-tight">
              {title}
            </h2>
            <p className="text-[14.5px] text-white/75 leading-[1.65] max-w-[480px]">{description}</p>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-1.5 bg-white text-blue font-semibold text-[14.5px] rounded-lg py-3 px-6 transition-colors hover:bg-[#f0f7ff]"
              onClick={() => openChat({ mode: "calendar" })}
            >
              {buttonText}
            </button>
          </div>

          {showPartnerBox && (
            <div className="hidden sm:flex items-center gap-3.5 bg-white rounded-xl py-3.5 px-4 shrink-0 shadow-card">
              <Image
                src="/salesforce-logo.png"
                alt="Salesforce"
                width={52}
                height={36}
                className="h-9 w-auto object-contain shrink-0"
              />
              <div>
                <div className="text-[15px] font-extrabold text-navy leading-tight tracking-tight">
                  PARTNER
                </div>
                <div className="text-[11px] font-semibold text-text-3 tracking-wide">
                  SINCE {partnerSince}
                </div>
              </div>
            </div>
          )}
        </div>
        </div>
      </AnimateIn>
    </section>
  );
}
