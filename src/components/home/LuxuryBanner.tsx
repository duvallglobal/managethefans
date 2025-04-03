import { motion } from "framer-motion";
import { Diamond, Star, Award } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Diamond,
    title: "Premium Service",
    description: "Exclusive management solutions for elite creators"
  },
  {
    icon: Star,
    title: "Expert Team",
    description: "Industry professionals dedicated to your success"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of exceptional growth and success"
  }
];

export default function LuxuryBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <motion.section 
      ref={sectionRef}
      className="relative bg-black py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#100000] via-black to-[#100000]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      
      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Premium{" "}
            <span className="bg-gradient-to-r from-[#800000] to-[#cc0000] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Elevate your online presence with our premium management services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-xl border border-[#800000]/20 bg-gradient-to-br from-[#200000] to-black/80 backdrop-blur-sm hover:border-[#cc0000]/40 transition-all duration-300 group"
            >
              <div className="mb-6 p-3 rounded-full bg-gradient-to-br from-[#800000] to-[#cc0000] w-14 h-14 flex items-center justify-center shadow-glow">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#cc0000] transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
