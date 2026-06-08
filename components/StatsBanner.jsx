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
    <Stagger className="bg-navy grid grid-cols-4" stagger={0.12}>
      {stats.map((stat, i) => (
        <StaggerItem
          key={stat.label}
          className={`py-10 px-6 text-center ${i < stats.length - 1 ? "border-r border-white/[0.08]" : ""}`}
        >
          <div className="text-[44px] font-extrabold text-blue-light leading-none">{stat.num}</div>
          <p className="text-[13px] text-white/55 mt-1.5">{stat.label}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
