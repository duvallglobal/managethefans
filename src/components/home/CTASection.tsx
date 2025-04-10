import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black"></div>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-darkest/10 to-transparent"></div>
      
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="absolute -left-20 bottom-0 w-60 h-60 rounded-full bg-primary/5 blur-3xl"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute -right-20 top-0 w-60 h-60 rounded-full bg-primary/5 blur-3xl"
      ></motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Start Your Journey Today</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-heading font-display font-bold tracking-tight leading-tight mb-6"
          >
            Ready to Transform Your{" "}
            <span className="text-gradient-red">Digital Presence</span>?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground mb-12 max-w-[50ch] mx-auto"
          >
            Join our exclusive community of successful creators and take your career to new heights.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-900 to-red-700 hover:from-red-800 hover:to-red-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/20 hover:shadow-red-800/40 border border-red-800/40 hover:border-red-700/60 group"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2 px-8 py-6 text-lg">
                Get Started Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-black/40 border border-white/10 hover:border-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105 group"
              asChild
            >
              <Link to="/pricing" className="flex items-center gap-2 px-8 py-6 text-lg">
                View Pricing
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
