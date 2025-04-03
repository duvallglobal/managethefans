import { motion } from "framer-motion";
import ServicesSection from "@/components/home/ServicesSection";
import LuxuryBanner from "@/components/home/LuxuryBanner";
import ProcessSection from "@/components/home/ProcessSection";

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black"
    >
      <div className="pt-24">
        <ServicesSection />
        <LuxuryBanner />
        <ProcessSection />
      </div>
    </motion.div>
  );
} 