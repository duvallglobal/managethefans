import { motion } from "framer-motion";
import { CreditCard, Users, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: CreditCard,
    title: "OnlyFans Management",
    description: "Expert strategies to grow your subscriber base and improve engagement.",
    features: [
      "Content strategy & scheduling",
      "Subscriber engagement & retention",
      "Revenue optimization",
      "Analytics & performance tracking"
    ],
    stats: {
      value: "300%",
      label: "Average Revenue Growth"
    },
    link: "/fans",
    color: "from-[#800000] to-[#cc0000]",
    borderColor: "border-[#800000]/20",
    hoverGlow: "[#800000]",
    path: "/fans",
    image: "/lovable-uploads/8704c8de-0bfc-443d-96d9-54b4c7c1f22b.png"
  },
  {
    icon: TrendingUp,
    title: "Social Media Growth",
    description: "Strategic growth and monetization services for all major social platforms.",
    features: [
      "Multi-platform management",
      "Content creation & curation",
      "Engagement optimization",
      "Analytics & reporting"
    ],
    stats: {
      value: "10X",
      label: "Follower Growth Rate"
    },
    link: "/social",
    color: "from-[#800000] to-[#cc0000]",
    borderColor: "border-[#800000]/20",
    hoverGlow: "[#800000]",
    path: "/social",
    image: "/lovable-uploads/294d0c3d-2233-41d2-a06d-7971c96dfffc.png"
  },
  {
    icon: Users,
    title: "Rent.Men Concierge",
    description: "Premium profile management and client acquisition services for professional Rent.Men creators.",
    features: [
      "Profile optimization",
      "Client engagement",
      "Booking management"
    ],
    stats: {
      value: "4.9/5",
      label: "Client Satisfaction"
    },
    link: "/masseur",
    color: "from-[#800000] to-[#cc0000]",
    borderColor: "border-[#800000]/20",
    hoverGlow: "[#800000]",
    path: "/masseur",
    image: "/lovable-uploads/cad463e6-4289-4d2f-aca6-25a1b5fe09fd.png"
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <motion.section
      ref={sectionRef}
      id="services"
      className="relative bg-black py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#100000] via-black to-[#100000]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      
      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our Professional{" "}
            <span className="bg-gradient-to-r from-[#800000] to-[#cc0000] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your unique needs, helping you maximize your online presence and revenue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/pricing">
            <motion.button
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#800000] to-[#cc0000] text-white font-medium hover:from-[#990000] hover:to-[#cc0000] transition-all duration-300 shadow-lg hover:shadow-[#800000]/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Custom Solutions
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
