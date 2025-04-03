import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

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
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col items-center bg-black pt-20 md:pt-24 overflow-hidden">
      {/* Simple background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/5 via-black to-black opacity-95 z-10"></div>
      </div>

      <div ref={parallaxRef} className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* 3D Earth Model with mobile-specific positioning */}
        <div className={`relative w-full h-[120px] xs:h-[150px] sm:h-[200px] md:h-[280px] mt-4 sm:mt-6 md:mt-0 mb-2 sm:mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <iframe src='https://my.spline.design/worldplanetdarkred-f684f67ddb36c7119a2b0609974e5a7c/' frameBorder='0' width='100%' height='100%'></iframe>
              
              {/* Logo overlay ONLY shown on non-mobile */}
              {!isMobile && (
                <div className="absolute top-[54%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="flex items-center justify-center text-center">
                    <div className="font-bold text-xl sm:text-2xl">
                      <span className="text-gradient-red">Manage</span>
                      <span className="text-white">TheFans</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 gap-3 md:gap-6 items-center">
          {/* Text Content */}
          <div className={`space-y-3 sm:space-y-5 text-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gradient-red text-white text-xs sm:text-sm font-semibold mb-1 border border-primary/30">
              Premium Digital Management
            </div>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight [text-wrap:balance]">
              Elevate Your <span className="text-gradient-red">Online Presence</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
              OnlyFans Management, Social Media Growth, and Rent.Men Concierge Services
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mt-3 sm:mt-4">
              <Button 
                size="default" 
                className="bg-gradient-to-r from-[#330000] to-[#660000] backdrop-blur-sm border border-primary/20 text-white font-medium px-3 sm:px-4 py-2.5 rounded-lg transition-all duration-300 text-xs sm:text-sm shadow-lg hover:from-[#440000] hover:to-[#770000] w-full sm:w-auto"
                asChild
              >
                <Link to="/contact">
                  Start Managing YOUR Fans Now!
                  <ArrowRight className="ml-1.5 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
              <Button 
                size="default" 
                className="bg-gradient-to-r from-[#1a0000] to-[#330000] backdrop-blur-sm border border-primary/20 text-white font-medium px-3 sm:px-4 py-2.5 rounded-lg transition-all duration-300 text-xs sm:text-sm shadow-lg hover:from-[#2a0000] hover:to-[#440000] w-full sm:w-auto"
                asChild
              >
                <Link to="/pricing">
                  Packages and Service Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-2 sm:bottom-4 md:bottom-6 left-0 right-0 flex justify-center animate-bounce transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

