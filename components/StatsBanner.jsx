"use client";

import { Stagger, StaggerItem } from "@/components/motion/Motion";

const stats = [
  { num: "9", label: "Años de experiencia" },
  { num: "+120", label: "Proyectos exitosos" },
  { num: "10", label: "Países con presencia" },
  { num: "9", label: "Casos de éxito" },
];

export default function StatsBanner() {
  return (
    <Stagger className="bg-navy grid grid-cols-2 lg:grid-cols-4" stagger={0.12}>
      {stats.map((stat, i) => (
        <StaggerItem
          key={stat.label}
          className={`py-8 md:py-10 px-4 md:px-6 text-center
            ${i % 2 === 0 ? "border-r border-white/[0.08]" : ""}
            ${i < 2 ? "border-b border-white/[0.08] lg:border-b-0" : ""}
            ${i < stats.length - 1 ? "lg:border-r lg:border-b-0" : "lg:border-r-0"}`}
        >
          <div className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-blue-light leading-none">{stat.num}</div>
          <p className="text-[12px] sm:text-[13px] text-white/55 mt-1.5">{stat.label}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
