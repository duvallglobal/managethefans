import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardCheck, Users2, BarChart3, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import { useRef } from "react";

// Enhanced process steps with more detailed descriptions and benefits
const steps = [
  {
    icon: ClipboardCheck,
    title: "Initial Consultation",
    description: "We begin with a comprehensive analysis of your current digital presence, goals, and target audience.",
    details: [
      "In-depth platform audit",
      "Competitor analysis",
      "Goal setting & KPI definition",
      "Audience targeting strategy"
    ],
    benefit: "Gain clarity on your current position and potential growth opportunities",
    color: "from-red-900/20 to-red-700/20 hover:from-red-900/30 hover:to-red-700/30",
    iconBg: "from-red-950 to-red-900/50"
  },
  {
    icon: Users2,
    title: "Strategy Development",
    description: "We create a customized roadmap tailored specifically to your unique brand and revenue objectives.",
    details: [
      "Content calendar creation",
      "Platform-specific strategies",
      "Pricing & monetization plan",
      "Growth projection modeling"
    ],
    benefit: "Receive a comprehensive plan designed for your specific niche and audience",
    color: "from-red-800/20 to-red-600/20 hover:from-red-800/30 hover:to-red-600/30",
    iconBg: "from-red-900 to-red-800/50"
  },
  {
    icon: BarChart3,
    title: "Implementation & Optimization",
    description: "Our team executes the strategy with precision, continuously refining based on performance data.",
    details: [
      "Content production assistance",
      "Engagement management",
      "Analytics monitoring",
      "Ongoing optimization"
    ],
    benefit: "Experience professional execution with data-driven refinements for maximum results",
    color: "from-red-700/20 to-red-500/20 hover:from-red-700/30 hover:to-red-500/30",
    iconBg: "from-red-800 to-red-700/50"
  },
  {
    icon: Rocket,
    title: "Growth & Scaling",
    description: "We accelerate your success through advanced techniques and expansion strategies.",
    details: [
      "Cross-platform promotion",
      "Audience expansion tactics",
      "Revenue stream diversification",
      "Long-term sustainability planning"
    ],
    benefit: "Achieve sustainable growth and maximize your earning potential across platforms",
    color: "from-red-600/20 to-red-400/20 hover:from-red-600/30 hover:to-red-400/30",
    iconBg: "from-red-700 to-red-600/50"
  }
];

export default function ProcessSection() {
  // Removed parallax scrolling effect for performance
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-black">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-black border border-gray-800 mb-6">
            <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-white/80 text-sm font-medium">Our Workflow</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-red-500">Process</span>
          </h2>
          
          <p className="text-white/70 text-lg max-w-[50ch] mx-auto">
            A systematic approach to transforming your digital presence and maximizing your success.
          </p>
        </div>

        <div className="relative">
          {/* Simplified timeline */}
          <div className="absolute top-12 left-0 w-full h-px bg-gray-800 md:hidden"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gray-800 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:mt-32'}`}
              >
                {/* Simplified timeline dot */}
                <div className="absolute top-12 left-1/2 w-6 h-6 -ml-3 rounded-full bg-red-600 border-2 border-black md:left-auto md:right-0 md:mr-0 md:ml-0 md:translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Step number indicator */}
                <div className="absolute top-12 left-1/2 -ml-4 -mt-10 text-red-500 font-bold text-xl md:left-auto md:right-0 md:mr-0 md:ml-0 md:translate-x-1/2">
                  {index + 1}
                </div>

                {/* Simplified step card */}
                <div className="h-full p-6 md:p-8 rounded-xl bg-black border border-gray-800">
                  <div className="flex flex-col h-full">
                    {/* Simplified icon container */}
                    <div className="mb-6 p-4 rounded-xl bg-black border border-gray-700 w-16 h-16 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-red-500" />
                    </div>
                    
                    {/* Title and description */}
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">{step.title}</h3>
                    <p className="text-white/70 text-base mb-4">{step.description}</p>
                    
                    {/* Key points - simplified */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail, i) => (
                          <span key={i} className="inline-block px-3 py-1 bg-gray-900 text-white/70 text-xs rounded-full">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Simplified benefit highlight */}
                    <div className="mt-auto pt-3 border-t border-gray-800">
                      <p className="text-red-400 text-sm">{step.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Simplified completion message */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 border border-gray-800 rounded-lg">
            <p className="text-white/80 text-base">
              From strategy to execution, we handle every aspect of your digital presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}