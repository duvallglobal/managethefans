import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="cta-banner relative py-24">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#200000] via-[#100000] to-black"></div>
      
      {/* Enhanced red accent glow */}
      <motion.div 
        className="absolute right-1/4 bottom-1/3 w-64 h-64 rounded-full bg-[#800000]/20 blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <motion.div 
        className="absolute left-1/4 top-1/3 w-48 h-48 rounded-full bg-[#cc0000]/20 blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 1
        }}
      />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] mix-blend-overlay"></div>
      
      {/* Content */}
      <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-[#800000] to-[#cc0000] bg-clip-text text-transparent">Elevate</span> Your Online Presence?
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            Join hundreds of successful content creators who have transformed their digital brand into a thriving business with our expert management services.
          </p>
          
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#800000] to-[#cc0000] rounded-lg shadow-lg hover:shadow-[#800000]/50 hover:brightness-110 transition-all duration-300"
            >
              Get Started Now
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-white/80">
              <svg className="w-5 h-5 text-[#cc0000] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No Long-Term Contracts</span>
            </div>
            
            <div className="flex items-center text-white/80">
              <svg className="w-5 h-5 text-[#cc0000] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Dedicated Account Manager</span>
            </div>
            
            <div className="flex items-center text-white/80">
              <svg className="w-5 h-5 text-[#cc0000] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Results Guaranteed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
