import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import EcosystemSection from "@/components/EcosystemSection";
import ExamDaySection from "@/components/ExamDaySection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import HomeHeader from "@/components/HomeHeader";
import HomeScrollNav from "@/components/HomeScrollNav";
import LifecycleSection from "@/components/LifecycleSection";
import PageBackdrop from "@/components/PageBackdrop";
import RoadmapSection from "@/components/RoadmapSection";
import RolesSection from "@/components/RolesSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip font-sans text-ink">
      <PageBackdrop />
      <HomeHeader />
      <HomeScrollNav />
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <ExamDaySection />
      <RolesSection />
      <LifecycleSection />
      <EcosystemSection />
      <RoadmapSection />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
