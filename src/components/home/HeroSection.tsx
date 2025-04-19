import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { ArrowRight } from 'lucide-react';

// Removed motion animations that cause performance issues
const HeroSection: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full bg-black min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Simplified static background without animations */}
      <div className="absolute inset-0">
        {/* Static gradient background - no animations */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#100000] to-[#330000]"></div>
        
        {/* Static accents instead of animated elements */}
        <div className="absolute top-1/4 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-radial from-red-900/20 to-transparent blur-[100px] mix-blend-screen"></div>
        
        {/* Static grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge with no animations */}
          <div className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-gradient-to-r from-[#660000]/20 to-[#440000]/20 text-red-300 border border-red-900/30 backdrop-blur-sm">
            Premier Digital Management Services
          </div>
          
          {/* Main heading - static, no animations */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 hw-accelerated">
            Turn Your Content Into a 
            <span className="block mt-2 md:mt-3 text-gradient-red">
              Thriving Empire
            </span>
          </h1>
          
          {/* Subheading - static, no animations */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-10">
            Comprehensive management solutions that 
            <span className="text-gradient-red"> maximize revenue</span>, 
            grow your audience, and save you valuable time.
          </p>
          
          {/* Key benefits - static, no animations */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 md:mb-12 text-white/90">
            {['Revenue Optimization', 'Audience Growth', 'Content Strategy', 'Multi-Platform Management'].map((item, i) => (
              <div key={i} className="flex items-center">
                <span className="mr-2 text-[#660000]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          {/* CTA button - static, no animations */}
          <div className="flex justify-center">
            <Button
              className="hw-accelerated rounded-full bg-gradient-to-r from-[#660000] to-[#990000] border border-red-800/30 text-white font-medium px-10 py-6 hover:from-[#770000] hover:to-[#aa0000] transition-all duration-300 text-base"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Start Growing Your Empire
                <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
