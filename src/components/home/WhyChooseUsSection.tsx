import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Award, Clock, Target, TrendingUp, Shield, Sparkles, Users, Zap } from "lucide-react";
import { useRef } from "react";

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  // Enhanced benefits with more detailed descriptions and key points
  const benefits = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Our team brings specialized knowledge in content creator management across all major platforms.",
      keyPoint: "7+ years of industry experience",
      color: "from-red-900 to-red-700"
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Focus on creating exceptional content while we handle all management and growth tasks.",
      keyPoint: "Save 20+ hours weekly",
      color: "from-red-800 to-red-600"
    },
    {
      icon: Target,
      title: "Strategic Approach",
      description: "Data-driven strategies tailored to your specific niche and audience demographics.",
      keyPoint: "Custom analytics dashboard",
      color: "from-red-700 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Proven methods to maximize your earnings across multiple platforms and revenue streams.",
      keyPoint: "Average 40% revenue increase",
      color: "from-red-600 to-red-400"
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Proactive measures to safeguard your content and maintain your professional reputation.",
      keyPoint: "Content monitoring system",
      color: "from-red-500 to-red-300"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account manager and 24/7 priority assistance for all your needs.",
      keyPoint: "VIP response within 2 hours",
      color: "from-red-900 to-red-700"
    },
    {
      icon: Zap,
      title: "Innovative Solutions",
      description: "Stay ahead with cutting-edge strategies and tools that keep you competitive.",
      keyPoint: "Early access to new features",
      color: "from-red-800 to-red-600"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Enhanced background with depth and texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0000] via-black to-[#0a0000]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
      
      {/* Enhanced accent lighting */}
      <motion.div
        style={{ y: y1 }}
        className="absolute right-1/4 top-1/4 w-[400px] h-[400px] rounded-full bg-red-900/10 blur-[150px]"
        animate={{
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute left-1/4 bottom-1/4 w-[350px] h-[350px] rounded-full bg-red-800/10 blur-[120px]"
        animate={{
          opacity: [0.08, 0.18, 0.08]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-28"
        >
          {/* Section badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-red-900/20 to-black/30 border border-red-800/20 mb-6">
            <Sparkles className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-white/80 text-sm font-medium">Our Advantages</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Choose Us</span>
          </h2>
          
          <p className="text-white/70 text-lg md:text-xl max-w-[60ch] mx-auto">
            We combine deep industry expertise with a client-focused approach to deliver exceptional results that consistently exceed expectations.
          </p>
        </motion.div>
        
        {/* Enhanced benefits layout with horizontal scrolling on mobile */}
        <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 snap-x snap-mandatory md:snap-none">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative min-w-[280px] md:min-w-0 snap-center px-4 md:px-0 flex-shrink-0 md:flex-shrink-1"
            >
              <div className="h-full p-8 rounded-2xl border border-red-900/20 bg-gradient-to-br from-black to-red-950/10 backdrop-blur-sm hover:border-red-700/30 transition-all duration-300 group hover:shadow-lg hover:shadow-red-900/5">
                {/* Enhanced icon container with gradient */}
                <div className="flex justify-center mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg shadow-red-900/10 border border-red-900/20 group-hover:shadow-red-800/20 transition-all duration-300`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Key point badge */}
                <div className="mb-4 text-center">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-red-900/20 to-black/40 text-red-300 text-sm font-medium">
                    {benefit.keyPoint}
                  </span>
                </div>
                
                {/* Enhanced title and description */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-300 transition-colors duration-300 text-center">
                  {benefit.title}
                </h3>
                
                <p className="text-white/70 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Added call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center px-10 py-6 rounded-2xl border border-red-900/20 bg-gradient-to-r from-black to-red-950/20 shadow-lg shadow-red-900/5">
            <CheckCircle className="w-6 h-6 text-red-500 mr-4" />
            <p className="text-white text-lg md:text-xl">
              Experience the difference of working with the industry's leading management team.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}