import { motion } from "framer-motion";
import { ClipboardCheck, Users2, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Initial Consultation",
    description: "In-depth discussion of your goals, current status, and growth strategy.",
    color: "from-red-900/20 to-red-700/20 hover:from-red-900/30 hover:to-red-700/30"
  },
  {
    icon: Users2,
    title: "Strategy Development",
    description: "Custom tailored plan creation based on your unique needs and market position.",
    color: "from-red-800/20 to-red-600/20 hover:from-red-800/30 hover:to-red-600/30"
  },
  {
    icon: BarChart3,
    title: "Implementation",
    description: "Expert execution of your strategy with continuous optimization and support.",
    color: "from-red-700/20 to-red-500/20 hover:from-red-700/30 hover:to-red-500/30"
  },
  {
    icon: Rocket,
    title: "Growth & Scaling",
    description: "Monitoring progress and adjusting strategies to maximize your success.",
    color: "from-red-600/20 to-red-400/20 hover:from-red-600/30 hover:to-red-400/30"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export default function ProcessSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#111] to-black/95 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-darkest/5 via-transparent to-transparent"></div>
      <div className="absolute left-20 top-1/3 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute right-20 bottom-1/3 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-heading font-display font-bold tracking-tight leading-tight mb-4">
            Our <span className="text-gradient-red">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[50ch] mx-auto">
            A systematic approach to transforming your online presence and maximizing your success.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
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
                <div className="absolute top-12 left-1/2 w-6 h-6 -ml-3 rounded-full bg-gradient-to-r from-red-800 to-red-600 border-2 border-black shadow-lg shadow-red-900/30 md:left-0 md:right-0 md:mx-auto z-10"></div>

                <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${step.color} border border-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-lg hover:shadow-red-900/10`}>
                  <div className="flex flex-col h-full">
                    <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-red-950 to-red-800 shadow-inner inline-flex w-16 h-16 items-center justify-center">
                      <step.icon className="w-8 h-8 text-red-300" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white font-display tracking-tight leading-tight">{step.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{step.description}</p>
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