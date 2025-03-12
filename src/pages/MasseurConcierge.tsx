import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle, FileEdit, Palette, DollarSign, Calendar, PenTool, Users, Bot, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const MasseurConcierge = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (window.innerWidth / 2 - clientX) / 30;
      const y = (window.innerHeight / 2 - clientY) / 30;
      
      const elements = parallaxRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const depth = parseFloat((el as HTMLElement).dataset.depth || "0.5");
        (el as HTMLElement).style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
    };
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
    <div className={`overflow-hidden bg-black text-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-black pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-transparent opacity-90 z-10"></div>
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-20"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/b7c5b19b-3814-4937-98c4-ac80dc2a8e98.png')] bg-cover bg-center opacity-40 transform scale-105 transition-transform duration-10000 hover:scale-110"></div>
        </div>

        <div ref={parallaxRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary to-primary-darker text-white text-sm font-semibold mb-6 parallax-element backdrop-blur-sm" data-depth="0.2">
              Premium Concierge Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up parallax-element [text-wrap:balance]" data-depth="0.3">
              Rent.Men <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Concierge Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up delay-100 parallax-element [text-wrap:balance]" data-depth="0.4">
              Premium profile management and client acquisition services for professional masseurs.
            </p>
            <Button 
              size="lg" 
              className="relative z-10 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-105 animate-fade-up delay-200 shadow-lg hover:shadow-primary/50"
              onClick={() => navigate('/contact')}
            >
              Elevate Your Practice
              <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary font-semibold">Comprehensive Services</span>
            <h2 className="text-4xl font-bold mb-4 text-white mt-2 [text-wrap:balance]">Fully Managed, Custom Rent.Men Operation Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto [text-wrap:balance]">
              End-to-end management of your online presence and client relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl transition-all duration-500 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="h-10 w-10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-bold mb-2 text-white transition-colors duration-300 group-hover:text-primary">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="text-primary font-semibold">Why Choose Us</span>
              <h2 className="text-4xl font-bold mb-6 text-white mt-2 [text-wrap:balance]">How Our Concierge Service Simplifies Your Professional Life</h2>
              <p className="text-xl text-gray-300 mb-8 [text-wrap:balance]">
                We handle the time-consuming aspects of managing your online presence, so you can focus on providing exceptional service to your clients.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className="flex items-start animate-on-scroll"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary-darker/20 rounded-2xl blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-xl border border-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="w-full h-[500px] bg-gray-800">
                  <img 
                    src="images/drive-download-20250310T192226Z-001/rentmen-whychooseus.png" 
                    alt="Why Choose Us" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-secondary to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-secondary to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary font-semibold">Our Methodology</span>
            <h2 className="text-4xl font-bold mb-4 text-white mt-2 [text-wrap:balance]">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto [text-wrap:balance]">
              A simple, effective approach to elevating your professional presence
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 -ml-px w-0.5 bg-gradient-to-b from-primary/0 via-primary to-primary/0 hidden md:block"></div>
            
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "We begin with a detailed consultation to understand your goals, target audience, and unique value proposition.",
                image: "/images/drive-download-20250310T192226Z-001/rentmen-initialconsult.png"
              },
              {
                step: "02",
                title: "Strategic Planning",
                description: "Our team develops a comprehensive strategy tailored to your specific market and goals.",
                image: "/images/drive-download-20250310T192226Z-001/rentmen-strategicplanning.png"
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute the strategy, optimizing your profile, content, and engagement tactics.",
                image: "/images/drive-download-20250310T192226Z-001/rentmen-implimentation.png"
              },
              {
                step: "04",
                title: "Ongoing Management",
                description: "Continuous optimization and support to ensure sustained growth and success.",
                image: "/images/drive-download-20250310T192226Z-001/rentmen-ongoingmanagement.png"
              }
            ].map((step, index) => (
              <div key={index} className="relative mb-16 md:mb-24 animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="group bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-all duration-500 hover:shadow-xl">
                      <h3 className="text-2xl font-bold mb-2 text-white transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold transition-transform duration-300 hover:scale-110">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className={`group rounded-xl overflow-hidden shadow-lg ${index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'}`}>
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-black to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/b7c5b19b-3814-4937-98c4-ac80dc2a8e98.png')] bg-cover bg-center opacity-10 transform scale-105 transition-transform duration-10000 hover:scale-110"></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-on-scroll [text-wrap:balance]">
            Enhance Your Professional Life with Ease and Sophistication
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto animate-on-scroll delay-100 [text-wrap:balance]">
            Join our exclusive concierge service and transform your online presence while saving time and increasing your income.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/50 animate-on-scroll delay-200"
            onClick={() => navigate('/contact')}
          >
            Sign Up Today
            <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MasseurConcierge;
