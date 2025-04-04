import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle, Award, Clock, Target, TrendingUp, Shield } from "lucide-react";

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Benefit from our specialized knowledge in content creator management and platform optimization."
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Focus on creating great content while we handle the time-consuming management and growth tasks."
    },
    {
      icon: Target,
      title: "Strategic Approach",
      description: "Data-driven strategies tailored to your specific niche and audience demographics."
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Proven methods to maximize your earnings across multiple platforms and revenue streams."
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Proactive measures to safeguard your content and maintain your professional reputation."
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#100000] via-black to-[#100000] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      
      {/* Accent glow */}
      <motion.div 
        className="absolute right-1/4 top-1/4 w-72 h-72 rounded-full bg-[#800000]/10 blur-[100px]"
        animate={{
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-[#800000] to-[#cc0000] bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            We combine industry expertise with a client-focused approach to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-xl border border-[#800000]/20 bg-gradient-to-br from-[#200000] to-black/80 backdrop-blur-sm hover:border-[#cc0000]/40 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#800000] to-[#cc0000] flex items-center justify-center shadow-glow">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#cc0000] transition-colors duration-300 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-center">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 