import { motion } from "framer-motion";
import { Users, TrendingUp, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "OnlyFans Management",
    description: "Complete profile management, content strategy, and audience growth for premium creators.",
    link: "/fans-management",
    color: "from-rose-500/20 to-rose-600/20"
  },
  {
    icon: TrendingUp,
    title: "Social Media Growth",
    description: "Strategic growth and engagement across all major social media platforms.",
    link: "/social-media-growth",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: MessageSquare,
    title: "Rent.Men Concierge",
    description: "Premium profile optimization and booking management for massage professionals.",
    link: "/masseur-concierge",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Comprehensive content protection and brand reputation management.",
    link: "/contact",
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

export default function ServicesSection() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium Services for <span className="text-gradient-red">Elite Creators</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive management solutions designed to elevate your digital presence and maximize your earning potential.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative"
            >
              <Link to={service.link}>
                <div className={`h-full p-6 rounded-2xl bg-gradient-to-br ${service.color} border border-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20`}>
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                    <p className="text-gray-300 text-sm flex-grow mb-4">{service.description}</p>
                    <div className="flex items-center text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-200">
                      Learn More
                      <motion.div
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
