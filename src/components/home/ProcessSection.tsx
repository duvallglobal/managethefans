import { motion } from "framer-motion";
import { ClipboardCheck, Users2, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Initial Consultation",
    description: "In-depth discussion of your goals, current status, and growth strategy.",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: Users2,
    title: "Strategy Development",
    description: "Custom tailored plan creation based on your unique needs and market position.",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    icon: BarChart3,
    title: "Implementation",
    description: "Expert execution of your strategy with continuous optimization and support.",
    color: "from-rose-500/20 to-rose-600/20"
  },
  {
    icon: Rocket,
    title: "Growth & Scaling",
    description: "Monitoring progress and adjusting strategies to maximize your success.",
    color: "from-emerald-500/20 to-emerald-600/20"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProcessSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-black/95 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-darkest/5 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-red">Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A systematic approach to transforming your online presence and maximizing your success.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent md:hidden"></div>
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={item}
                className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:mt-32'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute top-12 left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-primary to-primary-dark border-2 border-black md:left-0 md:right-0 md:mx-auto"></div>

                <div className={`h-full p-6 rounded-2xl bg-gradient-to-br ${step.color} border border-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20`}>
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 