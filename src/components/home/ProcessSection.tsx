import React, { useEffect, useState, useRef } from 'react';

const ProcessSection = () => {
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
      className="py-12 md:py-20 relative overflow-hidden bg-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/5 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white [text-wrap:balance] transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Our <span className="text-gradient-red text-glow">Process</span>
          </h2>
          <p 
            className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto [text-wrap:balance] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            A simple, effective approach to elevating your professional presence
          </p>
        </div>
        
        <div className="relative">
          {/* Process flow line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block"></div>
          
          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "We begin with a detailed consultation to understand your goals, target audience, and unique value proposition."
              },
              {
                step: "02",
                title: "Strategic Planning",
                description: "Our team develops a comprehensive strategy tailored to your specific market and goals."
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute strategy, optimizing your profile, content & engagement tactics."
              },
              {
                step: "04",
                title: "Ongoing Management",
                description: "Continuous optimization and support to ensure sustained growth and success."
              }
            ].map((step, index) => (
              <div 
                key={step.step}
                className={`glass-card-glow p-6 md:p-8 rounded-2xl text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-red flex items-center justify-center mx-auto text-white font-bold text-xl animate-pulse-glow">
                    {step.step}
                  </div>
                  <div className="absolute -top-1 -right-1 -bottom-1 -left-1 rounded-full border border-primary/30 opacity-50 animate-pulse"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gradient-red">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
    </section>
  );
};

export default ProcessSection; 