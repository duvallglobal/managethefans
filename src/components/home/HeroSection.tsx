import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded after a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;

      const { clientX, clientY } = e;
      const x = (window.innerWidth / 2 - clientX) / 30;
      const y = (window.innerHeight / 2 - clientY) / 30;

      const elements = parallaxRef.current.querySelectorAll(".parallax-element");
      elements.forEach((el) => {
        const depth = parseFloat((el as HTMLElement).dataset.depth || "0.5");
        (el as HTMLElement).style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative min-h-[95vh] md:min-h-[95vh] flex items-center bg-black pt-8 md:pt-10 overflow-hidden">
      {/* Simple background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/5 via-black to-black opacity-95 z-10"></div>
      </div>

      <div ref={parallaxRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-0 sm:py-0 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Text Content */}
          <div className={`space-y-6 sm:space-y-8 text-center lg:text-left transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-red text-white text-sm font-semibold mb-2 border border-primary/30">
              Premium Digital Management
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight [text-wrap:balance]">
              Elevate Your <span className="text-gradient-red">Online Presence</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              OnlyFans Management, Social Media Growth, and Rent.Men Concierge Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#330000] to-[#660000] backdrop-blur-sm border border-primary/20 text-white font-medium px-4 sm:px-6 py-4 sm:py-6 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:from-[#440000] hover:to-[#770000]"
                asChild
              >
                <Link to="/contact">
                  Start Managing YOUR Fans Now!
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#1a0000] to-[#330000] backdrop-blur-sm border border-primary/20 text-white font-medium px-4 sm:px-6 py-4 sm:py-6 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:from-[#2a0000] hover:to-[#440000]"
                asChild
              >
                <Link to="/pricing">
                  Packages and Service Pricing
                </Link>
              </Button>
            </div>
          </div>

          {/* 3D Earth Model with zoomed out view and logo overlay */}
          <div className={`relative h-[250px] xs:h-[280px] sm:h-[350px] md:h-[450px] transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <iframe src='https://my.spline.design/worldplanetdarkred-f684f67ddb36c7119a2b0609974e5a7c/' frameBorder='0' width='100%' height='100%'></iframe>
                
                {/* Logo overlay positioned at center of Earth instead of black box */}
                <div className="absolute top-[54%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="flex items-center justify-center text-center">
                    <div className="font-bold text-xl sm:text-2xl">
                      <span className="text-gradient-red">Manage</span>
                      <span className="text-white">TheFans</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-4 sm:bottom-6 md:bottom-10 left-0 right-0 flex justify-center animate-bounce transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

