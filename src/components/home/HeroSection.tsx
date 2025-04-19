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
    <section className="relative w-full bg-black min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Simplified static background without animations */}
      <div className="absolute inset-0">
        {/* Static gradient background - no animations */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#100000] to-[#330000]"></div>
        
        {/* Static accents instead of animated elements */}
        <div className="absolute top-1/4 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-radial from-red-900/20 to-transparent blur-[100px] mix-blend-screen"></div>
        
        {/* Static grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-6 md:py-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Updated badge to match subpage style */}
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-red text-white text-xs sm:text-sm font-medium mb-6 border border-primary/20 shadow-glow">
            Monetize Smarter. Scale Faster.
          </div>
          
          {/* Main heading with improved spacing - separated into two distinct lines */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 hw-accelerated">
            Manage your Fans.
          </h1>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6 hw-accelerated text-gradient-red">
            Like a Pro.
          </h1>
          
          {/* Subheading with improved spacing around gradient text */}
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
          We turn your content into 
            <span className="text-gradient-red px-4 mx-2">profit machines</span> 
            —so you can focus on what you do best.
          </p>
          
          {/* Key benefits - static, no animations */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 md:mb-10 text-white/90">
            {['All-in-one management', 'Social Media Acceleration', 'Strategic Content & Scheduling', 'Multi-Platform Management'].map((item, i) => (
              <div key={i} className="flex items-center">
                <span className="mr-2 text-[#400000]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          {/* CTA button - updated to match subpages */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#660000] to-[#990000] backdrop-blur-sm border border-primary/20 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:from-[#770000] hover:to-[#aa0000]"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Start Growing Your Empire
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
