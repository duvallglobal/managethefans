import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesSection: FC = () => {
  const services = [
    {
      title: "OnlyFans Management",
      description: "Complete management of your OnlyFans presence including subscriber engagement, content scheduling, and revenue optimization.",
      features: ["Content scheduling", "Subscriber engagement", "Revenue optimization", "Performance analytics"],
      path: "/fans",
      // Updated image to match OnlyFans service
      image: "/lovable-uploads/0ae570b5-e71a-4a45-ae1b-d849d1525992.png"
    },
    {
      title: "Social Media Growth",
      description: "Strategic growth services for all major social platforms to expand your audience and drive conversions.",
      features: ["Platform optimization", "Content strategy", "Audience growth", "Engagement management"],
      path: "/social",
      // Updated image to match Social Media service
      image: "/lovable-uploads/294d0c3d-2233-41d2-a06d-7971c96dfffc.png"
    },
    {
      title: "Rent.Men Concierge",
      description: "Premium profile management and client acquisition services for massage professionals.",
      features: ["Profile optimization", "Client screening", "Booking management", "Revenue growth"],
      path: "/masseur",
      // Updated image to match Rent.Men service
      image: "/lovable-uploads/cad463e6-4289-4d2f-aca6-25a1b5fe09fd.png"
    }
  ];

  return (
    <section className="bg-black py-16 relative overflow-hidden">
      {/* Background styling to match ProcessSection */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(153, 0, 0, 0.05) 10px, rgba(153, 0, 0, 0.05) 11px)` 
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Premium <span className="text-gradient-red">Services</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive management solutions designed to help content creators thrive in the digital landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ServiceCard {...service} index={index} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <Button
            className="rounded-lg bg-gradient-to-r from-[#660000] to-[#990000] backdrop-blur-sm border border-red-800/30 text-white font-medium px-6 py-3 shadow-lg hover:shadow-red-900/30 hover:from-[#770000] hover:to-[#aa0000] hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link to="/pricing" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
