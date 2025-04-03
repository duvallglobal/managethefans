import React, { useEffect, useState, useRef } from 'react';

const LuxuryBanner = () => {
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
      className="py-10 md:py-16 relative overflow-hidden"
    >
      {/* Background with deep red gradient similar to the "Ready to Transform" banner */}
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute inset-0 bg-gradient-red-intense opacity-15 z-0"></div>
      <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white">Luxury Management for </span>
            <span className="text-gradient-red">Elite Professionals</span>
          </h2>
          
          <p 
            className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Discreet, professional services tailored exclusively for high-end creators and professionals
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-gradient-red opacity-10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/3 w-40 h-40 rounded-full bg-gradient-red opacity-10 blur-3xl" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default LuxuryBanner;
