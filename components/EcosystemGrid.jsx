import Link from "next/link";
import Icon from "@/components/Icon";

const solutions = [
  { slug: "sales-cloud", icon: "cloud", iconBg: "#dbeafe", title: "Sales Cloud", desc: "Automatiza tu proceso comercial y aumenta la visibilidad de ventas." },
  { slug: "service-cloud", icon: "heart", iconBg: "#fce7f3", title: "Service Cloud", desc: "Centraliza la atención y mejora la experiencia del cliente omnicanal." },
  { slug: "experience-cloud", icon: "globe-alt", iconBg: "#d1faf4", title: "Experience Cloud", desc: "Conecta clientes, partners y equipos en experiencias digitales seguras." },
  { slug: "marketing-cloud", icon: "megaphone", iconBg: "#fff7ed", title: "Marketing Cloud", desc: "Crea journeys automatizados y campañas personalizadas que generan resultados." },
  { slug: "commerce-cloud", icon: "shopping-cart", iconBg: "#f0fdf4", title: "Commerce Cloud", desc: "Desarrolla experiencias de comercio digital conectadas y optimizadas." },
  { slug: "financial-services-cloud", icon: "building-library", iconBg: "#e0f2fe", title: "Financial Services Cloud", desc: "Solución especializada para bancos, aseguradoras y fintechs." },
  { slug: "manufacturing-cloud", icon: "building-office", iconBg: "#fef3c7", title: "Manufacturing Cloud", desc: "Visibilidad end-to-end en forecasting, producción y cadena de suministro." },
];

export default function EcosystemGrid() {
  return (
    <div id="ecosistema" className="py-[72px] px-10">
      <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-blue mb-2.5 text-center">
        NUESTRO ECOSISTEMA
      </p>
      <h2 className="text-[32px] font-extrabold text-navy mb-3 tracking-tight text-center">
        Soluciones Salesforce para cada etapa de crecimiento
      </h2>
      <p className="text-[15px] text-text-2 max-w-[600px] mx-auto mb-11 leading-[1.65] text-center">
        Implementamos y optimizamos las soluciones del ecosistema Salesforce que impulsan la
        eficiencia, la colaboración y el crecimiento sostenible de tu empresa.
      </p>

      <div className="grid grid-cols-3 gap-5">
        {solutions.map((svc) => (
          <Link
            key={svc.slug}
            href={`/solutions/${svc.slug}`}
            className="flex items-start gap-4 bg-bg border-[1.5px] border-border rounded-[10px] p-[18px] transition-all duration-200 hover:border-[#c7d7f8] hover:bg-[#f0f7ff] cursor-pointer"
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
              <span className="link-blue">Saber más →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
