import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudyList } from "@/data/caseStudies";

export const metadata = {
  title: "Casos de éxito | Coders Solution",
  description:
    "Conoce cómo empresas líderes transformaron sus operaciones con Salesforce junto a Coders Solution.",
};

export default function CasosDeExitoPage() {
  return (
    <>
      <Navbar />

      <div className="py-2.5 px-4 sm:px-6 md:px-10 bg-bg border-b border-border text-[12.5px] text-text-3">
        Inicio › Casos de éxito
      </div>

      <div className="py-12 md:py-16 lg:py-[72px] px-4 sm:px-6 md:px-10">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-blue mb-2.5 text-center">
          CASOS DE ÉXITO
        </p>
        <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-navy mb-3 tracking-tight text-center">
          Resultados reales, impacto tangible
        </h1>
        <p className="text-[15px] text-text-2 max-w-[600px] mx-auto mb-11 leading-[1.65] text-center">
          Conoce cómo ayudamos a empresas de distintas industrias a transformar sus operaciones con Salesforce.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudyList.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>

      <CtaBanner />
      <Footer />
    </>
  );
}
