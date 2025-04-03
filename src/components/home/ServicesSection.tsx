import React, { useEffect, useState, useRef } from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      title: "OnlyFans Management",
      description: "Expert content strategy, subscriber engagement, marketing campaigns, and analytics for maximum growth.",
      features: ["Content Strategy", "Subscriber Engagement", "Marketing Campaigns", "Analytics Dashboard"],
      path: "/fans",
      image: "/lovable-uploads/001322db-ce1c-441c-a671-521ae32e3b4c.png"
    },
    {
      title: "Social Media Growth",
      description: "Strategic content creation, audience targeting, influencer outreach & paid campaigns for exponential growth.",
      features: ["Content Creation", "Audience Targeting", "Influencer Outreach", "Paid Campaigns"],
      path: "/social",
      image: "/lovable-uploads/294d0c3d-2233-41d2-a06d-7971c96dfffc.png"
    },
    {
      title: "Rent.Men Concierge",
      description: "Premium profile optimization, branding, client vetting, chatbot setup, and analytics tracking services.",
      features: ["Profile Optimization", "Brand Development", "Client Vetting", "Analytics Tracking"],
      path: "/masseur",
      image: "/lovable-uploads/b7c5b19b-3814-4937-98c4-ac80dc2a8e98.png"
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-20 bg-black relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
      
      {/* Dark diagonal lines for texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(153, 0, 0, 0.05) 10px, rgba(153, 0, 0, 0.05) 11px)` 
        }}></div>
      </div>
      
      {/* Light beam effect */}
      <div className="absolute top-0 left-1/3 w-1 h-full bg-primary/10 blur-xl"></div>
      <div className="absolute top-0 right-1/3 w-1 h-full bg-primary/10 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div 
            className={`inline-block px-4 py-2 rounded-full bg-gradient-red text-white text-sm font-semibold mb-4 backdrop-blur-sm animate-pulse-glow border border-primary/30 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Our Expertise
          </div>
          <h2 
            className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white text-glow [text-wrap:balance] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Premium <span className="text-gradient-red">Services</span>
          </h2>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 h-full"
        >
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`transition-all duration-1000 transform h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} 
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <ServiceCard
                {...service}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary/5 animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
