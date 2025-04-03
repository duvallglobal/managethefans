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
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 mb-8"
          >
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Start Your Journey Today</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Ready to Transform Your{" "}
            <span className="text-gradient-red">Digital Presence</span>?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 mb-12"
          >
            Join our exclusive community of successful creators and take your career to new heights.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary border border-primary/20 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20 group"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2 px-8 py-6 text-lg">
                Get Started Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-20 bottom-0 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -right-20 top-0 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>
    </section>
  );
}
