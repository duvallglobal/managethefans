import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FC } from "react";

const ProcessSection: FC = () => {
  // Process steps data
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We conduct a comprehensive analysis of your current online presence, audience demographics, and competitors to identify growth opportunities."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Our team creates a tailored growth strategy based on your unique goals, target audience, and platform-specific opportunities."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute the strategy with precision, optimizing your content, engagement tactics, and promotional activities."
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description: "Through continuous performance tracking, we refine and scale successful tactics to maximize your results."
    }
  ];

  return (
    <section className="bg-black py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(102, 0, 0, 0.05) 10px, rgba(102, 0, 0, 0.05) 11px)` 
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Our <span className="text-gradient-red">Process</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            A systematic approach to growing your online presence and maximizing your revenue
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-6 rounded-xl border border-primary/20 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-red text-white font-bold text-xl">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 text-gradient-red text-center">
                {step.title}
              </h3>
              <p className="text-gray-300 text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;