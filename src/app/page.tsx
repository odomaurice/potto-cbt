import AboutSection from "@/components/AboutSection";
import EcosystemSection from "@/components/EcosystemSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import HomeHeader from "@/components/HomeHeader";
import HomeScrollNav from "@/components/HomeScrollNav";
import HowItWorksSection from "@/components/HowItWorksSection";
import PageBackdrop from "@/components/PageBackdrop";
import RoadmapSection from "@/components/RoadmapSection";
import RolesSection from "@/components/RolesSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden font-poppins text-ink">
      <PageBackdrop />
      <HomeHeader />
      <HomeScrollNav />
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <RolesSection />
      <HowItWorksSection />
      <EcosystemSection />
      <RoadmapSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
