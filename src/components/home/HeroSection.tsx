import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current || isMobile) return;

      const { clientX, clientY } = e;
      const x = (window.innerWidth / 2 - clientX) / 30;
      const y = (window.innerHeight / 2 - clientY) / 30;

      const elements = parallaxRef.current.querySelectorAll(".parallax-element");
      elements.forEach((el) => {
        const depth = parseFloat((el as HTMLElement).dataset.depth || "0.5");
        (el as HTMLElement).style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    if (!isMobile) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, [isMobile]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center bg-black pt-12 md:pt-16 overflow-hidden">
      {/* Enhanced background with more sophisticated gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-darkest/10 via-black to-black opacity-95 z-10"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#330000]/80 to-black/80 opacity-50 z-20"></div>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-30"></div>
      </div>

      <div ref={parallaxRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Enhanced Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30"
            >
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Digital Management</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              Elevate Your <br />
              <span className="text-gradient-red">Online Influence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              Expert management solutions for premium creators and influencers. Transform your online presence into a thriving business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary border border-primary/20 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20 group"
                asChild
              >
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button 
                size="lg"
                variant="outline"
                className="border-primary/20 text-white hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Enhanced Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 md:order-2"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              <img 
                src="/lovable-uploads/f9ffa256-0dd3-4b96-9750-fdad4dc022f2.png" 
                alt="Professional content creator in a studio setting" 
                className="w-full h-full object-cover parallax-element"
                data-depth="0.2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 w-[90%]"
            >
              <div className="flex-1 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-primary/10">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-400">Active Clients</div>
              </div>
              <div className="flex-1 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-primary/10">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

