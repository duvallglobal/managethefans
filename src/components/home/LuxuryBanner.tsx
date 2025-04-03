import { motion } from "framer-motion";
import { Diamond, Star, Award } from "lucide-react";

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
  return (
    <section className="relative py-20 overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Luxury Management for <span className="text-gradient-red">Elite Professionals</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discreet, professional services tailored exclusively for high-end creators and professionals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/20">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-primary/20 to-transparent">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/3 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
    </section>
  );
}
