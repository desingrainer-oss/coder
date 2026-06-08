import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowWeHelp from "@/components/HowWeHelp";
import EcosystemExpertise from "@/components/EcosystemExpertise";
import StatsBanner from "@/components/StatsBanner";
import CaseStudies from "@/components/CaseStudies";
import Methodology from "@/components/Methodology";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <Navbar transparent />
        <Hero />
        <TrustBar />
      </section>
      <HowWeHelp />
      <EcosystemExpertise />
      <StatsBanner />
      <CaseStudies />
      <Methodology />
      <CtaBanner />
      <Footer />
    </>
  );
}
