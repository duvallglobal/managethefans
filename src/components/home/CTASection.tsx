import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
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

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Enhanced background with dark styling */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-95 z-10"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/cad463e6-4289-4d2f-aca6-25a1b5fe09fd.png')] bg-cover bg-center opacity-5"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 leading-tight [text-wrap:balance]">
            Ready to Transform Your <span className="text-gradient-red">Digital Presence</span>?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-16 mx-auto max-w-4xl [text-wrap:balance]">
            Our premium concierge services will help you maximize your potential and earnings.
          </p>
          
          <Button
            size="lg"
            className="bg-gradient-red-intense hover:opacity-90 text-white font-medium text-lg rounded-lg transition-all duration-300 px-8 py-7 shadow-lg"
            asChild
          >
            <Link to="/contact">
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
