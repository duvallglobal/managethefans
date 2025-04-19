import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function CTASection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-black">
      {/* Standardized background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(102, 0, 0, 0.05) 10px, rgba(102, 0, 0, 0.05) 11px)` 
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge with standardized styling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#660000]/30 to-black/40 border border-[#660000]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2 text-red-500" />
            <span className="text-sm font-medium text-white/80">Take Action Today</span>
          </motion.div>

          {/* Heading with standardized gradient */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-light mb-5"
          >
            Ready to Improve Your <span className="text-gradient-red">Digital Presence</span>?
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-white/70 text-base md:text-lg mb-8"
          >
            Join our community of creators who are maximizing their revenue and building sustainable digital businesses.
          </motion.p>
          
          {/* Removed the benefits list that contained the elements to be removed */}
          
          {/* Standardized CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#660000] to-[#990000] hover:from-[#770000] hover:to-[#aa0000] text-white font-medium rounded-lg w-full sm:w-auto border border-[#660000]/30"
              asChild
            >
              <Link to="/contact" className="flex items-center justify-center gap-2 px-8 py-3">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="bg-black border border-[#660000]/20 hover:border-[#660000]/40 text-white rounded-lg w-full sm:w-auto"
              asChild
            >
              <Link to="/pricing" className="flex items-center justify-center gap-2 px-8 py-3">
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
