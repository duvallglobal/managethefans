import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import LuxuryBanner from '../components/home/LuxuryBanner';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import CTASection from '../components/home/CTASection';
import ResultsSection from '../components/home/ResultsSection';
import TestimonialSection from '../components/home/TestimonialSection';

// Performance optimized homepage
// - Removed heavy animations and parallax effects
// - Simplified gradient backgrounds
// - Removed consultation form
// - Renamed sections for better clarity
// - Optimized component rendering

export default function Home() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section - First impression and main value proposition */}
      <HeroSection />
      
      {/* Premium Services Banner */}
      <LuxuryBanner />
      
      {/* Services Section - Core service offerings */}
      <ServicesSection />
      
      {/* Results Section - Demonstrate proven outcomes */}
      <ResultsSection />
      
      {/* Process Section - Clear workflow explanation */}
      <ProcessSection />
      
      {/* Testimonials - Social proof */}
      <TestimonialSection />
      
      {/* Why Choose Us - Competitive advantages */}
      <WhyChooseUsSection />
      
      {/* CTA Section - Final conversion point */}
      <CTASection />
    </div>
  );
}
