import React from "react";
import HeroSection from "@/components/home/HeroSection";
import LuxuryBanner from "@/components/home/LuxuryBanner";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden bg-black text-white"
    >
      <HeroSection />
      <LuxuryBanner />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </motion.div>
  );
};

export default Index;
