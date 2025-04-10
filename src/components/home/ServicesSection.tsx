import { motion } from "framer-motion";
import { Users, TrendingUp, MessageSquare, Shield, ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "OnlyFans Management",
    description: "Complete profile management, content strategy, and audience growth for premium creators.",
    link: "/fans-management",
    color: "from-red-900/20 to-red-600/20 hover:from-red-800/30 hover:to-red-500/30"
  },
  {
    icon: TrendingUp,
    title: "Social Media Growth",
    description: "Strategic growth and engagement across all major social media platforms.",
    link: "/social-media-growth",
    color: "from-red-800/20 to-red-500/20 hover:from-red-700/30 hover:to-red-400/30"
  },
  {
    icon: MessageSquare,
    title: "Rent.Men Concierge",
    description: "Premium profile optimization and booking management for massage professionals.",
    link: "/masseur-concierge",
    color: "from-red-700/20 to-red-400/20 hover:from-red-600/30 hover:to-red-300/30"
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Comprehensive content protection and brand reputation management.",
    link: "/contact",
    color: "from-red-600/20 to-red-300/20 hover:from-red-500/30 hover:to-red-200/30"
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

export default function ServicesSection() {
  return (
    <>
      {/* Diagonal divider */}
      <div className="relative h-24 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[#0d0d0d] transform -skew-y-2"></div>
      </div>
    
      <section id="services" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#0d0d0d] to-[#111] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/3 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-heading font-display font-bold tracking-tight leading-tight mb-4">
              Premium Services for <span className="text-gradient-red">Elite Creators</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-[50ch] mx-auto">
              Comprehensive management solutions designed to elevate your digital presence and maximize your earning potential.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={item}
                className="group relative"
              >
                <Link to={service.link} className="block h-full">
                  <div className={`flex flex-col items-center text-center h-full p-8 rounded-2xl bg-gradient-to-br ${service.color} backdrop-blur-sm transition-all duration-300 hover:scale-105 border border-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-red-900/10`}>
                    <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-red-950 to-red-800 shadow-inner">
                      <service.icon className="w-8 h-8 text-red-300" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white group-hover:text-red-200 transition-colors font-display tracking-tight leading-tight">{service.title}</h3>
                    
                    <p className="text-muted-foreground text-sm md:text-base flex-grow mb-6">{service.description}</p>
                    
                    <div className="flex items-center justify-center w-full">
                      <span className="inline-flex items-center text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-200 bg-black/40 py-2 px-5 rounded-full hover:bg-black/60">
                        Learn More
                        <ArrowRightCircle className="ml-2 w-4 h-4 group-hover:ml-3 transition-all duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-20 text-center"
          >
            <Link to="/pricing">
              <Button className="bg-gradient-to-r from-red-900 to-red-700 hover:from-red-800 hover:to-red-600 text-white px-8 py-6 rounded-full shadow-lg shadow-red-900/20 transition-all duration-300 hover:shadow-red-800/40 border border-red-800/40 hover:border-red-700/60">
                View All Services
                <ArrowRightCircle className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Diagonal divider */}
      <div className="relative h-24 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[#111] transform skew-y-2"></div>
      </div>
    </>
  );
}
