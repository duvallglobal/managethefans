import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    };
  }, []);

  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex items-center bg-black pt-12 md:pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-20"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/cad463e6-4289-4d2f-aca6-25a1b5fe09fd.png')] bg-cover bg-center opacity-20"></div>
      </div>

      <div ref={parallaxRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4 sm:py-8 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-3 sm:space-y-6 md:space-y-8 animate-fade-up text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-base md:text-lg font-semibold mb-1 backdrop-blur-sm">
              Premium Digital Management
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight [text-wrap:balance]">
              Elevate Your <span className="text-primary">Online Presence</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-300">
              OnlyFans Management,
              Social Media Growth, and Rent.Men Concierge Services
            </p>
            <div className="w-full flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="default" className="btn-primary text-sm md:text-base py-2" asChild>
                <Link to="/contact">
                Start Managing YOUR Fans Now!
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary text-sm md:text-base py-2" asChild>
                <Link to="/pricing">
                Packages and Service Pricing
                </Link>
              </Button>
            </div>
          </div>

          {/* Parallax Elements */}
          <div className="relative h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] animate-fade-in block">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-full blur-3xl parallax-element" data-depth="0.2"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 rounded-full bg-gradient-to-br from-gray-700/40 to-gray-800/40 opacity-20 animate-pulse parallax-element" data-depth="0.5"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-80 h-56 md:h-80 border border-gray-700/50 rounded-full animate-float parallax-element bg-gray-800/20" data-depth="0.3"></div>
            <div className="absolute top-0 right-0 w-80 h-80 parallax-element bg-gray-800/30 rounded-2xl backdrop-blur-sm hidden md:block" data-depth="0.8">
              <img src="/lovable-uploads/0ae570b5-e71a-4a45-ae1b-d849d1525992.png" alt="Masseur" className="rounded-2xl object-cover shadow-xl" />
            </div>
            <div className="absolute bottom-0 left-0 w-72 h-72 parallax-element bg-gray-800/30 rounded-2xl backdrop-blur-sm hidden md:block" data-depth="0.6">
              <img src="/lovable-uploads/8704c8de-0bfc-443d-96d9-54b4c7c1f22b.png" alt="Professional" className="rounded-2xl object-cover shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 sm:bottom-6 md:bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <svg className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
