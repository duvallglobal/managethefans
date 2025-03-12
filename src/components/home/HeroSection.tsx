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
      
      const elements = parallaxRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const depth = parseFloat((el as HTMLElement).dataset.depth || "0.5");
        (el as HTMLElement).style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-black pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-20"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/cad463e6-4289-4d2f-aca6-25a1b5fe09fd.png')] bg-cover bg-center opacity-20"></div>
      </div>

      <div ref={parallaxRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2 backdrop-blur-sm mx-auto lg:mx-0">
              Premium Digital Management
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              Elevate Your <span className="text-primary">Online Presence</span>
            </h1>
            <p className="text-xl text-gray-300">
              Expert management and growth strategies for OnlyFans creators,
              social media influencers, and Rent.Men professionals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="default" className="btn-primary" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary" asChild>
                <Link to="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-[500px] animate-fade-in hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-full blur-3xl parallax-element" data-depth="0.2"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-gray-700/40 to-gray-800/40 opacity-20 animate-pulse pa
