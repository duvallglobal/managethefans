import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Users, DollarSign, Clock, BarChart3 } from "lucide-react";
import { useRef } from "react";

// Enhanced animated counter statistics
const stats = [
  {
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    label: "Audience Growth",
    description: "Average annual growth across platforms",
    color: "from-red-600 to-red-400"
  },
  {
    icon: Users,
    value: 400,
    suffix: "+",
    label: "Elite Clients",
    description: "Creators who trust our expertise",
    color: "from-red-700 to-red-500"
  },
  {
    icon: DollarSign,
    value: 2.5,
    prefix: "$",
    suffix: "M+",
    label: "Revenue Generated",
    description: "For our clients in the past year",
    color: "from-red-800 to-red-600"
  },
  {
    icon: Clock,
    value: 20,
    suffix: "k+",
    label: "Hours Saved",
    description: "Time clients reclaim monthly",
    color: "from-red-900 to-red-700"
  },
  {
    icon: BarChart3,
    value: 85,
    suffix: "%",
    label: "Retention Rate",
    description: "Clients who continue with our services",
    color: "from-red-950 to-red-800"
  }
];

// Enhanced counter animation with better visual effects
const CounterAnimation = ({ value, prefix = "", suffix = "", color }: { value: number, prefix?: string, suffix?: string, color: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      {/* Background glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 blur-xl rounded-full transform scale-150`}></div>
      
      <motion.span
        className="text-5xl md:text-6xl lg:text-7xl font-bold font-display relative z-10 text-white"
      >
        {prefix}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              duration: 1,
              delay: 0.3
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {value}
        </motion.span>
        <span className="text-gradient-red">{suffix}</span>
      </motion.span>
    </motion.div>
  );
};

export default function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 overflow-hidden"
    >
      {/* Enhanced background with depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0000] via-black to-[#0a0000]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
      
      {/* Enhanced accent lighting */}
      <motion.div
        style={{ y: y1 }}
        className="absolute right-1/4 top-1/3 w-[500px] h-[500px] rounded-full bg-red-900/10 blur-[150px]"
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
        className="absolute left-1/4 bottom-1/3 w-[400px] h-[400px] rounded-full bg-red-800/10 blur-[120px]"
        animate={{
          opacity: [0.08, 0.18, 0.08]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Section badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-red-900/20 to-black/30 border border-red-800/20 mb-6">
            <span className="text-red-500 mr-2">📈</span>
            <span className="text-white/80 text-sm font-medium">Measurable Success</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
            Proven <span className="text-gradient-red">Results</span>
          </h2>
          
          <p className="text-white/70 text-lg md:text-xl max-w-[60ch] mx-auto">
            Our data-driven strategies consistently deliver exceptional growth and revenue optimization for elite creators across all major platforms.
          </p>
        </motion.div>

        {/* Enhanced stats layout with horizontal scrolling on mobile */}
        <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 snap-x snap-mandatory md:snap-none">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1
              }}
              className="text-center min-w-[250px] md:min-w-0 snap-center px-4 md:px-0 flex-shrink-0 md:flex-shrink-1"
            >
              {/* Enhanced icon container */}
              <div className="mb-8 p-5 rounded-2xl bg-gradient-to-br from-black to-red-950/30 border border-red-900/20 w-20 h-20 flex items-center justify-center mx-auto shadow-lg shadow-red-900/5">
                <stat.icon className="w-9 h-9 text-red-400" />
              </div>
              
              {/* Enhanced counter with background effect */}
              <CounterAnimation
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                color={stat.color}
              />
              
              <h3 className="text-2xl font-bold mt-4 mb-3 text-white">
                {stat.label}
              </h3>
              
              <p className="text-white/60 text-base">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced call-out banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center px-10 py-6 rounded-2xl border border-red-900/20 bg-gradient-to-r from-black to-red-950/20 shadow-lg shadow-red-900/5">
            <p className="text-white text-lg md:text-xl">
              We don't just promise results – <span className="font-bold text-gradient-red">we consistently deliver them</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
