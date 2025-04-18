import { motion } from "framer-motion";
import { Diamond, Star, Award, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Diamond,
    title: "Premium Service",
    description: "Exclusive management solutions tailored for elite creators and professionals"
  },
  {
    icon: Star,
    title: "Expert Team",
    description: "Industry veterans with specialized knowledge in digital content monetization"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Consistent record of exceptional growth and revenue optimization"
  },
  {
    icon: Shield,
    title: "Discreet & Secure",
    description: "Confidential management with privacy as our highest priority"
  },
  {
    icon: Users,
    title: "VIP Support",
    description: "24/7 dedicated assistance for all your professional needs"
  }
];

export default function LuxuryBanner() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-black">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black border border-gray-800 mb-5">
            <span className="text-red-500 mr-2">✦</span>
            <span className="text-white/80 text-sm font-medium">Professional Management</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Premium Digital <span className="text-red-500">Management Services</span>
          </h2>
          
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive services designed for creators who demand excellence in their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-black/80 to-black border border-red-900/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-red-700/30 hover:shadow-lg hover:shadow-red-900/5">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-red-950 to-red-900/30 border border-red-800/20 shadow-inner">
                    <feature.icon className="w-7 h-7 text-red-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-300 transition-colors duration-300">{feature.title}</h3>
                  
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Luxury badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-red-900/20 bg-gradient-to-r from-black to-red-950/30">
            <Diamond className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-white/90 text-sm font-medium">Experience the difference of premium management</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
