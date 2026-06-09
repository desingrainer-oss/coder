"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CaseStudyFeatureCard from "@/components/CaseStudyFeatureCard";
import { featuredHomeCases } from "@/data/caseStudies";
import { AnimateIn, EASE_CORP } from "@/components/motion/Motion";

function CarouselArrow({ direction, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Anterior" : "Siguiente"}
      className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-border shadow-card flex items-center justify-center text-blue transition-all duration-200 hover:border-blue/30 hover:shadow-card-lg hover:scale-105 disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:shadow-card disabled:hover:scale-100"
    >
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {direction === "prev" ? (
          <path d="M12.5 4.5 L7.5 10 L12.5 15.5" />
        ) : (
          <path d="M7.5 4.5 L12.5 10 L7.5 15.5" />
        )}
      </svg>
    </button>
  );
}

export default function CaseStudies() {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(2);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setPerPage(mq.matches ? 1 : 2);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setPage(0);
  }, [perPage]);

  const totalPages = Math.ceil(featuredHomeCases.length / perPage);
  const visible = featuredHomeCases.slice(page * perPage, page * perPage + perPage);

  return (
    <div className="py-12 md:py-16 lg:py-[72px] px-4 sm:px-6 md:px-10 bg-[#f8fafc]">
      <AnimateIn>
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-blue mb-2.5 text-center">
          CASOS DE ÉXITO
        </p>
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-navy mb-3 tracking-tight text-center">
          Resultados reales, impacto tangible
        </h2>
        <p className="text-[14px] sm:text-[15px] text-text-2 max-w-[600px] mx-auto mb-8 md:mb-11 leading-[1.65] text-center">
          Conoce cómo ayudamos a empresas a transformar sus operaciones con Salesforce.
        </p>
      </AnimateIn>

      <div className="max-w-[1240px] mx-auto flex items-center gap-3 md:gap-5">
        <CarouselArrow
          direction="prev"
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
        />

        <div className="flex-1 min-w-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${page}-${perPage}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: EASE_CORP }}
              className={`grid gap-4 md:gap-5 ${perPage === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}
            >
              {visible.map((study) => (
                <CaseStudyFeatureCard key={study.slug} study={study} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <CarouselArrow
          direction="next"
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page >= totalPages - 1}
        />
      </div>
    </div>
  );
}
