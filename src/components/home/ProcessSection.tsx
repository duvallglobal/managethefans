import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We start by understanding your unique goals, challenges, and audience through a comprehensive discovery session.",
    features: [
      "Personal Account Manager",
      "Needs Analysis Report",
      "Platform Recommendations"
    ]
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Our experts create a tailored strategy designed to maximize your online presence and revenue potential.",
    features: [
      "Content Calendar Planning",
      "Growth Projection Models",
      "Competitor Analysis"
    ]
  },
  {
    number: "03",
    title: "Implementation",
    description: "We execute the strategy across all platforms, handling content creation, optimization, and audience engagement.",
    features: [
      "Profile Optimization",
      "Content Creation Support",
      "Engagement Campaigns"
    ]
  },
  {
    number: "04",
    title: "Ongoing Management",
    description: "Continuous optimization, performance tracking, and strategy refinement to ensure sustained growth and profitability.",
    features: [
      "Performance Analytics",
      "Strategy Refinements",
      "Revenue Optimization"
    ]
  }
];

export default function ProcessSection() {
  return (
    <section className="relative bg-black py-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#100000] via-black to-[#100000]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      
      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#800000] to-[#cc0000] bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            A streamlined approach to transform your online presence into a thriving business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-xl border border-[#800000]/20 bg-gradient-to-br from-[#200000] to-black/80 backdrop-blur-sm hover:border-[#cc0000]/40 transition-all duration-300 group"
            >
              <div className="mb-6 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#800000] to-[#cc0000] flex items-center justify-center text-xl font-bold text-white shadow-glow">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#cc0000] transition-colors duration-300 text-center">
                {step.title}
              </h3>
              
              <p className="text-gray-400 text-center">
                {step.description}
              </p>

              <ul className="mt-4 space-y-2">
                {step.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-1">
                      <div className="flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-[#800000] to-[#cc0000] text-white shadow-md shadow-[#800000]/10">
                        <CheckCircle className="w-3 h-3" />
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 