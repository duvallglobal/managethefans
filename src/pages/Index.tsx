import React from "react";
import HeroSection from "@/components/home/HeroSection";
import LuxuryBanner from "@/components/home/LuxuryBanner";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="overflow-hidden bg-black text-white">
      <HeroSection />
      <LuxuryBanner />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
};

export default Index;
