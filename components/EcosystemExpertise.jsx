import Link from "next/link";
import Icon from "@/components/Icon";
import { AnimateIn, Stagger, StaggerItem } from "@/components/motion/Motion";
const groups = [
  {
    title: "Core CRM & Customer Operations",
    items: [
      { slug: "sales-cloud", icon: "cloud", iconBg: "#dbeafe", title: "Sales Cloud" },
      { slug: "service-cloud", icon: "heart", iconBg: "#fce7f3", title: "Service Cloud" },
      { slug: "experience-cloud", icon: "globe-alt", iconBg: "#d1faf4", title: "Experience Cloud" },
      { slug: "marketing-cloud", icon: "megaphone", iconBg: "#fff7ed", title: "Marketing Cloud" },
      { slug: "commerce-cloud", icon: "shopping-cart", iconBg: "#f0fdf4", title: "Commerce Cloud" },
      { slug: "financial-services-cloud", icon: "building-library", iconBg: "#e0f2fe", title: "Financial Services Cloud" },
      { slug: "manufacturing-cloud", icon: "building-office", iconBg: "#fef3c7", title: "Manufacturing Cloud" },
    ],
  },
  {
    title: "Data, AI & Analytics",
    items: [
      { slug: null, icon: "cube", iconBg: "#e0f2fe", title: "Data Cloud" },
      { slug: null, icon: "chart-bar", iconBg: "#fff0e6", title: "Tableau" },
      { slug: null, icon: "cpu-chip", iconBg: "#dbeafe", title: "Agentforce" },
    ],
  },
  {
    title: "Integrations & Productivity",
    items: [
      { slug: null, icon: "link", iconBg: "#d1faf4", title: "MuleSoft" },
      { slug: null, icon: "chat-bubble", iconBg: "#f3e8ff", title: "Slack" },
    ],
  },
];

function EcosystemItem({ item }) {
  const inner = (
    <>
      <div
        className="w-10 h-10 rounded-[10px] shrink-0 flex items-center justify-center"
        style={{ background: item.iconBg }}
      >
        <Icon name={item.icon} className="w-5 h-5 text-blue" />
      </div>
      <span className="text-[13.5px] font-semibold text-navy">{item.title}</span>
    </>
  );

  if (item.slug) {
    return (
      <Link
        href={`/solutions/${item.slug}`}
        className="flex items-center gap-3 bg-white border border-border rounded-lg py-3 px-4 card-lift hover:border-blue/30 hover:bg-[#f0f7ff]"
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3 bg-white border border-border rounded-lg py-3 px-4">
      {inner}
    </div>
  );
}

export default function EcosystemExpertise() {
  return (
    <div id="ecosistema" className="py-12 md:py-16 lg:py-[72px] px-4 sm:px-6 md:px-10 bg-white">
      <AnimateIn>
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-blue mb-2.5 text-center">
          ECOSISTEMA SALESFORCE
        </p>
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-navy mb-3 tracking-tight text-center">
          Salesforce ecosystem expertise
        </h2>
        <p className="text-[15px] text-text-2 max-w-[720px] mx-auto mb-12 leading-[1.65] text-center">
          Ayudamos a las empresas a conectar ventas, servicio, datos, automatización e inteligencia
          artificial dentro del ecosistema Salesforce.
        </p>
      </AnimateIn>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1240px] mx-auto" stagger={0.14}>
        {groups.map((group) => (
          <StaggerItem key={group.title}>            <h3 className="text-[13px] font-bold text-navy uppercase tracking-wide mb-4 pb-2 border-b border-border">
              {group.title}
            </h3>
            <div className="flex flex-col gap-2.5">
              {group.items.map((item) => (
                <EcosystemItem key={item.title} item={item} />
              ))}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>  );
}
