import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle, FileEdit, Palette, DollarSign, Calendar, PenTool, Users, Bot, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RentMenConcierge = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    setIsVisible(true);
    
    // Remove all animation logic
    document.querySelectorAll('.animate-on-scroll, .animate-fade-up').forEach((el) => {
      // Remove animation classes and add visible state
      el.classList.remove('animate-on-scroll', 'animate-fade-up');
      el.classList.add('opacity-100', 'translate-y-0');
    });

    return () => {};
  }, []);

  const services = [
    {
      icon: FileEdit,
      title: "Profile Creation & Optimization",
      description: "Expert profile creation and regular updates to maximize visibility and appeal."
    },
    {
      icon: Palette,
      title: "Personalized Branding & Image Consulting",
      description: "Develop a unique brand that highlights your strengths and attracts your ideal clients."
    },
    {
      icon: DollarSign,
      title: "Pricing Strategy & Service Structuring",
      description: "Optimize your pricing and services for maximum value and profitability."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling & Calendar Management",
      description: "Efficient booking systems to maximize your schedule and minimize downtime."
    },
    {
      icon: PenTool,
      title: "Crafting Engaging Headlines & Descriptions",
      description: "Compelling copy that attracts quality clients and conveys your unique value."
    },
    {
      icon: Users,
      title: "Discreet Client Vetting & Screening",
      description: "Professional screening systems to ensure client quality and safety."
    },
    {
      icon: Bot,
      title: "Chatbot Setup for Automated Client Inquiries",
      description: "Automated systems to handle initial inquiries and screening questions."
    },
    {
      icon: MessageSquare,
      title: "Client Communication Strategies & Etiquette",
      description: "Proven communication templates and approaches for client satisfaction."
    }
  ];

  const benefits = [
    "Save 15+ hours weekly on profile management",
    "Increase your booking rate and decrease client response times",
    "Raise your rates while maintaining client volume",
    "Attract higher quality, respectful clients",
    "Eliminate no-shows and time-wasters",
    "Build a consistent, professional brand presence"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white"
    >
      {/* Hero Section - Updated */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat py-20 overflow-hidden"
        style={{ backgroundImage: `url('/lovable-uploads/b7c5b19b-3814-4937-98c4-ac80dc2a8e98.png')` }} // Updated background image
      >
        {/* Gradient Overlay - Updated */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-0"></div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#800000] to-[#cc0000] text-white text-sm font-semibold mb-4 border border-[#cc0000]/50 shadow-md">
            Premium Concierge Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Rent.Men <span className="bg-gradient-to-r from-[#800000] to-[#cc0000] bg-clip-text text-transparent text-glow">Concierge Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Premium profile management and client acquisition services for professional Rent.Men creators.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#800000] to-[#cc0000] backdrop-blur-sm border border-[#cc0000]/30 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 text-base shadow-lg hover:from-[#990000] hover:to-[#dd0000] hover:shadow-[#cc0000]/40"
            onClick={() => navigate('/contact')}
          >
            Elevate Your Practice
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        {/* Optional Scroll Arrow */}
         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <ChevronDown className="w-8 h-8 text-white/50 animate-bounce" />
        </div>
      </section>

      {/* Services Grid - Section Title Updated */} 
      <section className="py-10 md:py-16 bg-black relative" ref={sectionRef}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#100000]/10 to-transparent"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(153, 0, 0, 0.05) 10px, rgba(153, 0, 0, 0.05) 11px)` 
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            {/* Updated title and subtitle to match screenshot */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 [text-wrap:balance] opacity-100">
              Fully Managed, Custom <span className="bg-gradient-to-r from-[#800000] to-[#cc0000] bg-clip-text text-transparent text-glow">Rent.Men</span> Operation Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto [text-wrap:balance] opacity-100">
              End-to-end management of your online presence and client relationships
            </p>
          </div>
          
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="glass-card-glow p-4 md:p-6 rounded-2xl opacity-100 flex flex-col h-full border border-[#800000]/20 hover:border-[#cc0000]/40 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4">
                  <service.icon className="h-8 w-8 text-[#cc0000]" style={{ filter: 'drop-shadow(0 0 5px #cc0000)' }} />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white text-center">{service.title}</h3>
                <p className="text-sm text-gray-400 flex-grow text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Image Overlay Removed */} 
      <section className="py-10 md:py-16 relative overflow-hidden bg-gradient-to-b from-[#100000] to-black">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02] mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="opacity-100">
               {/* Updated title to match screenshot */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white [text-wrap:balance]">
                How Our <span className="bg-gradient-to-r from-[#800000] to-[#cc0000] bg-clip-text text-transparent text-glow">Concierge Service</span> Simplifies Your Professional Life
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-8 [text-wrap:balance]">
                We handle the time-consuming aspects of managing your online presence, so you can focus on providing exceptional service to your clients.
              </p>
              
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start opacity-100">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#800000] to-[#cc0000] text-white shadow-md shadow-[#cc0000]/20">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <span className="text-base lg:text-lg text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative opacity-100 mt-6 lg:mt-0">
              {/* Removed overlay div with blur */}
              <div className="relative rounded-2xl overflow-hidden border border-[#800000]/30 shadow-xl shadow-[#800000]/20">
                <div className="w-full aspect-[4/3] bg-gray-900">
                  <img 
                    src="/lovable-uploads/0ae570b5-e71a-4a45-ae1b-d849d1525992.png" // Updated image source
                    alt="Rent.Men Concierge benefits" 
                    className="w-full h-full object-cover"
                  />
                   {/* Text overlay removed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section placeholder - Not adding actual content */}
      {/* 
      <section className="py-10 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">A simple, effective approach to elevating your professional presence</p>
          </div>
          // Add Grid/Layout for the 4 process steps here 
        </div>
      </section>
      */}
      
      {/* CTA Section - Text Updated */}
      <section className="py-16 md:py-24 bg-gradient-to-t from-[#100000] to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/10 via-transparent to-[#cc0000]/10 opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Updated title and subtitle */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight [text-wrap:balance]">
              Enhance Your Professional Life with <span className="bg-gradient-to-r from-[#800000] to-[#cc0000] bg-clip-text text-transparent text-glow">Ease and Sophistication</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 mx-auto max-w-3xl [text-wrap:balance]">
              Join our exclusive concierge service and transform your online presence while saving time and increasing your income.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#800000] to-[#cc0000] backdrop-blur-sm border border-[#cc0000]/30 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 text-lg shadow-lg hover:from-[#990000] hover:to-[#dd0000] hover:shadow-[#cc0000]/40"
              onClick={() => navigate('/contact')}
            >
              {/* Updated button text */} 
              Sign Up Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default RentMenConcierge;
