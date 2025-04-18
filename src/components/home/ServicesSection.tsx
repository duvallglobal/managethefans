import { motion, useScroll, useTransform } from "framer-motion";
import { Users, TrendingUp, MessageSquare, Shield, ArrowRightCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Enhanced services with more detailed features and benefits
const services = [
  {
    icon: Users,
    title: "OnlyFans Management",
    description: "Complete profile management, content strategy, and audience growth for premium creators.",
    features: [
      "Strategic content planning & scheduling",
      "Subscriber engagement & retention",
      "Revenue optimization strategies",
      "Performance analytics & reporting",
      "Exclusive promotional opportunities"
    ],
    benefits: "Increase revenue by up to 200% with our proven strategies",
    link: "/fans-management",
    color: "from-red-900 to-red-700",
    bgImage: "/lovable-uploads/0ae570b5-e71a-4a45-ae1b-d849d1525992.png"
  },
  {
    icon: TrendingUp,
    title: "Social Media Growth",
    description: "Strategic growth and engagement across all major social media platforms.",
    features: [
      "Cross-platform content strategy",
      "Audience building & engagement",
      "Trend analysis & implementation",
      "Competitor research & positioning",
      "Algorithm optimization"
    ],
    benefits: "Expand your reach and build a loyal following across platforms",
    link: "/social-media-growth",
    color: "from-red-800 to-red-600",
    bgImage: "/lovable-uploads/b7c5b19b-3814-4937-98c4-ac80dc2a8e98.png"
  },
  {
    icon: MessageSquare,
    title: "Rent.Men Concierge",
    description: "Premium profile optimization and booking management for massage professionals.",
    features: [
      "Profile optimization & branding",
      "Client communication management",
      "Booking & scheduling assistance",
      "Reputation management",
      "Premium placement strategies"
    ],
    benefits: "Maximize bookings and build a distinguished professional presence",
    link: "/masseur-concierge",
    color: "from-red-700 to-red-500",
    bgImage: "/lovable-uploads/cad463e6-4289-4d2f-aca6-25a1b5fe09fd.png"
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Comprehensive content protection and brand reputation management.",
    features: [
      "Content copyright monitoring",
      "DMCA takedown assistance",
      "Brand reputation monitoring",
      "Crisis management protocols",
      "Preventative protection strategies"
    ],
    benefits: "Safeguard your content and maintain your professional reputation",
    link: "/contact",
    color: "from-red-600 to-red-400",
    bgImage: "/lovable-uploads/f9ffa256-0dd3-4b96-9750-fdad4dc022f2.png"
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Enhanced parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  return (
    <>
      {/* Enhanced diagonal divider with gradient */}
      <div className="relative h-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0000] to-[#100000] transform -skew-y-2"></div>
      </div>
    
      <section
        ref={sectionRef}
        id="services"
        className="relative py-32 lg:py-40 overflow-hidden"
      >
        {/* Enhanced background with depth and texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#100000] via-black to-[#100000]"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03]"></div>
        
        {/* Enhanced accent lighting effects */}
        <motion.div
          style={{ y: y1 }}
          className="absolute left-0 top-1/4 w-[500px] h-[500px] rounded-full bg-red-900/10 blur-[150px]"
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
          className="absolute right-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-red-800/10 blur-[120px]"
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
          <div className="text-center mb-16 md:mb-20">
            {/* Simplified section badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-black border border-gray-800 mb-5">
              <Sparkles className="w-4 h-4 text-red-500 mr-2" />
              <span className="text-white/80 text-sm font-medium">Professional Services</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Complete Digital <span className="text-red-500">Management Solutions</span>
            </h2>
            
            <p className="text-white/70 text-base md:text-lg max-w-[50ch] mx-auto">
              Comprehensive services designed to optimize your online presence and maximize your revenue potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative"
              >
                <Link to={service.link} className="block h-full">
                  <div className="h-full rounded-3xl overflow-hidden relative">
                    {/* Enhanced card background with subtle image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/95 to-black/80"></div>
                    
                    {/* Subtle background image for texture */}
                    {service.bgImage && (
                      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                        <img
                          src={service.bgImage}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    {/* Enhanced accent border */}
                    <div className="absolute inset-0 rounded-3xl border border-red-900/20 group-hover:border-red-700/40 transition-colors duration-300"></div>
                    
                    {/* Enhanced accent glow on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl rounded-3xl bg-gradient-to-br from-red-600/30 to-red-800/30"></div>
                    
                    {/* Content with improved layout */}
                    <div className="relative p-8 md:p-10 flex flex-col h-full">
                      {/* Enhanced service icon */}
                      <div className="mb-8 p-5 rounded-2xl bg-gradient-to-br from-black to-red-950/30 border border-red-900/20 w-20 h-20 flex items-center justify-center shadow-lg shadow-red-900/5 group-hover:shadow-red-800/20 transition-all duration-300">
                        <service.icon className="w-9 h-9 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                      </div>
                      
                      {/* Enhanced service title */}
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white group-hover:text-red-200 transition-colors duration-300 font-display tracking-tight leading-tight">{service.title}</h3>
                      
                      {/* Enhanced service description */}
                      <p className="text-white/70 text-base md:text-lg mb-8">{service.description}</p>
                      
                      {/* Enhanced service features */}
                      <ul className="mb-8 space-y-4">
                        {service.features ? service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-3 mt-1.5">
                              <div className="w-2 h-2 rounded-full bg-red-500 group-hover:bg-red-400 transition-colors duration-300"></div>
                            </div>
                            <span className="text-white/80 text-sm md:text-base group-hover:text-white/90 transition-colors duration-300">{feature}</span>
                          </li>
                        )) : null}
                      </ul>
                      
                      {/* Added benefit highlight */}
                      {service.benefits && (
                        <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-red-900/10 to-transparent border-l-2 border-red-700/30">
                          <p className="text-white/90 text-sm italic">{service.benefits}</p>
                        </div>
                      )}
                      
                      {/* Enhanced learn more button */}
                      <div className="mt-auto">
                        <div className="inline-flex items-center text-white/90 text-sm font-medium group-hover:text-white transition-colors duration-300 bg-gradient-to-r from-red-900/20 to-black/40 py-3 px-6 rounded-full group-hover:from-red-800/30 group-hover:to-black/50">
                          Explore Service
                          <ArrowRightCircle className="ml-2 w-5 h-5 group-hover:ml-3 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Enhanced CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24 text-center"
          >
            <Link to="/pricing">
              <Button className="bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 text-white px-10 py-7 rounded-full shadow-lg shadow-red-900/20 transition-all duration-300 hover:shadow-red-800/30 border border-red-800/30 hover:border-red-700/50 text-lg">
                View All Services & Pricing
                <ArrowRightCircle className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Enhanced diagonal divider */}
      <div className="relative h-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#100000] to-[#0a0000] transform skew-y-2"></div>
      </div>
    </>
  );
}
