import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/CaseStudyPage";
import { caseStudies, caseStudySlugs } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};
  return {
    title: `${study.client} – Caso de éxito | Coders Solution`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
