"use client";

import { AnimateIn, Stagger, StaggerItem } from "@/components/motion/Motion";

const steps = [
  {
    num: 1,
    label: "Descubrimiento y análisis",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#1a73e8" strokeWidth="1.6" strokeLinecap="round">
        <path d="M10 12c0-3 2.5-5 5-5s5 2 5 5-2 5-5 5" />
        <path d="M17 12c0-3 2.5-5 5-5s5 2 5 5-2 5-5 5" />
        <path d="M8 22c1.5-3 4-4.5 8-4.5s6.5 1.5 8 4.5" />
      </svg>
    ),
  },
  {
    num: 2,
    label: "Diseño de solución",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#1a73e8" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="16" cy="16" r="3" />
        <path d="M16 4v5M16 23v5M4 16h5M23 16h5M7.5 7.5l3.5 3.5M21 21l3.5 3.5M7.5 24.5l3.5-3.5M21 11l3.5-3.5" />
      </svg>
    ),
  },
  {
    num: 3,
    label: "Implementación en Salesforce",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#1a73e8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="7" width="18" height="18" rx="3" />
        <circle cx="16" cy="16" r="2.5" fill="#1a73e8" stroke="none" />
        <path d="M16 7v4M16 21v4M7 16h4M21 16h4" />
      </svg>
    ),
  },
  {
    num: 4,
    label: "Adopción y capacitación",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#1a73e8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 26c-4-3-8-6-8-11a8 8 0 0116 0c0 5-4 8-8 11z" />
        <path d="M12 14c1.5 1 2.5 2.5 4 2.5s2.5-1.5 4-2.5" />
      </svg>
    ),
  },
  {
    num: 5,
    label: "Optimización continua",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#1a73e8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 12a8 8 0 10-2.3 5.7" />
        <path d="M24 6v6h-6" />
        <path d="M8 20a8 8 0 101.3-5.8" />
        <path d="M8 26v-6h6" />
      </svg>
    ),
  },
];

function CurvedConnector({ flip = false }) {
  return (
    <svg
      viewBox="0 0 72 36"
      className={`w-[72px] h-9 shrink-0 mx-1 ${flip ? "scale-x-[-1]" : ""}`}
      aria-hidden
    >
      <path
        d="M4 28 C 22 4, 50 4, 68 28"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        strokeLinecap="round"
      />
      <path
        d="M63 24 L68 28 L63 32"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Methodology() {
  return (
    <div id="metodologia" className="py-[72px] px-10 bg-white">
      <AnimateIn>
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-blue mb-2.5 text-center">
          ASÍ TRABAJAMOS
        </p>
        <h2 className="text-[32px] font-extrabold text-navy mb-14 tracking-tight text-center">
          Una metodología comprobada para lograr resultados
        </h2>
      </AnimateIn>

      <div className="max-w-[1180px] mx-auto flex justify-center">
        <Stagger className="flex items-center" stagger={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={step.num} className="flex items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-[72px] h-[72px] rounded-full bg-[#eef1f6] flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[22px] font-extrabold text-navy leading-none mb-1">{step.num}</div>
                  <p className="text-[13px] font-semibold text-navy leading-snug max-w-[108px]">{step.label}</p>
                </div>
              </div>
              {index < steps.length - 1 && <CurvedConnector flip={index % 2 === 1} />}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
