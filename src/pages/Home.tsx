import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import LuxuryBanner from "@/components/home/LuxuryBanner";
import CTASection from "@/components/home/CTASection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProcessSection />
      <LuxuryBanner />
      <CTASection />
    </main>
  );
} 