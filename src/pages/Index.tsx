import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import LuxuryBanner from "@/components/home/LuxuryBanner";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1] // Spring-like easing
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const Index = () => {
  // More targeted approach to style application
  useEffect(() => {
    // Helper to apply styles only when needed
    const applyCardStyles = () => {
      // Find cards that need styling but don't already have the classes
      document.querySelectorAll('.card:not(.content-card)').forEach(card => {
        card.classList.add('content-card');
      });
      
      document.querySelectorAll('[class*="process-"]:not(.process-card)').forEach(element => {
        element.classList.add('process-card');
      });
      
      document.querySelectorAll('[class*="service-"]:not(.service-card)').forEach(element => {
        element.classList.add('service-card');
      });
    };
    
    // Run once on mount
    applyCardStyles();
    
    // Also run after content might have loaded
    const timeoutId = setTimeout(applyCardStyles, 500);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="overflow-hidden bg-black text-white"
    >
      <motion.div variants={fadeInUp}>
        <HeroSection />
      </motion.div>
      
      <motion.div 
        variants={fadeInUp}
        className="mb-0 mt-0"
      >
        <LuxuryBanner />
      </motion.div>
      
      <motion.div variants={fadeInUp}>
        <ServicesSection />
      </motion.div>
      
      <motion.div variants={fadeInUp}>
        <ProcessSection />
      </motion.div>
      
      <motion.div variants={fadeInUp}>
        <CTASection />
      </motion.div>
    </motion.div>
  );
};

export default Index;
