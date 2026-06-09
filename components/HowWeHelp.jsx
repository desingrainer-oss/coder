import Link from "next/link";
import { AnimateIn, Stagger, StaggerItem } from "@/components/motion/Motion";

function IconConsulting() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 28 28" fill="none" stroke="#1a73e8" strokeWidth="1.6">
      <circle cx="10" cy="9" r="3.5" />
      <circle cx="19" cy="9" r="3.5" />
      <path d="M4 22c0-3.3 2.7-6 6-6s6 2.7 6 6M14 22c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" strokeLinecap="round" />
    </svg>
  );
}

function IconImplementation() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 28 28" fill="none" stroke="#1a73e8" strokeWidth="1.6">
      <path
        d="M8 17h12a3.5 3.5 0 000-7 4.5 4.5 0 00-8.6-1.2A3 3 0 008 17z"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="21.5" r="1.2" fill="#1a73e8" stroke="none" />
      <circle cx="14" cy="23" r="1.2" fill="#1a73e8" stroke="none" />
      <circle cx="18" cy="21.5" r="1.2" fill="#1a73e8" stroke="none" />
    </svg>
  );
}

function IconManaged() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 28 28" fill="none" stroke="#1a73e8" strokeWidth="1.6">
      <path d="M14 4 L24 9 V16 C24 21 14 25 14 25 C14 25 4 21 4 16 V9 Z" strokeLinejoin="round" />
      <path d="M10 14 L13 17 L19 11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const cards = [
  {
    href: "/consulting",
    Icon: IconConsulting,
    title: "Salesforce Consulting",
    desc: "Definimos estrategias Salesforce alineadas a objetivos de negocio, optimización operativa y crecimiento empresarial.",
  },
  {
    href: "/implementation",
    Icon: IconImplementation,
    title: "Salesforce Implementation",
    desc: "Implementamos soluciones Salesforce enfocadas en automatización, adopción y eficiencia operativa.",
  },
  {
    href: "/managed",
    Icon: IconManaged,
    title: "Managed Services",
    desc: "Acompañamos la evolución continua de Salesforce mediante soporte, optimización y mejoras estratégicas.",
  },
];

export default function HowWeHelp() {
  return (
    <div className="py-12 md:py-16 lg:py-[72px] px-4 sm:px-6 md:px-10 bg-[#f8fafc]">
      <AnimateIn>
        <h2 className="text-[13px] font-extrabold tracking-[1.5px] uppercase text-navy mb-10 text-center">
          CÓMO AYUDAMOS A LAS EMPRESAS A ESCALAR CON SALESFORCE
        </h2>
      </AnimateIn>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-[1240px] mx-auto" stagger={0.12}>
        {cards.map((card) => (
          <StaggerItem key={card.href}>
            <Link
              href={card.href}
              className="group bg-white border border-border rounded-2xl py-6 md:py-8 px-5 md:px-7 shadow-card card-lift cursor-pointer hover:shadow-card-lg hover:border-blue/20 flex flex-col sm:flex-row items-start gap-5 sm:gap-7 relative overflow-hidden h-full min-h-[200px]"
            >
            <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-blue rounded-r-full" />

            <div className="shrink-0 w-[80px] h-[80px] rounded-full bg-[#e8f1fd] flex items-center justify-center ml-2 mt-1">
              <card.Icon />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <h3 className="text-[17px] font-bold text-navy mb-2.5 leading-snug">{card.title}</h3>
              <p className="text-[13.5px] text-text-2 leading-[1.65] mb-5 flex-1">{card.desc}</p>
              <span className="link-blue text-[14px]">Explorar →</span>
            </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
