import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function CTASection() {
  // Benefits to highlight in the CTA
  const benefits = [
    { icon: CheckCircle, text: "Personalized strategy tailored to your brand" },
    { icon: CheckCircle, text: "Dedicated account manager" },
    { icon: CheckCircle, text: "30-day satisfaction guarantee" }
  ];
  
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-black">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Simplified badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black border border-gray-800 mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-red-500" />
            <span className="text-sm font-medium text-white/80">Take Action Today</span>
          </div>

          {/* Simplified heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Ready to Improve Your <span className="text-red-500">Digital Presence</span>?
          </h2>
          
          {/* Simplified description */}
          <p className="text-white/70 text-base md:text-lg mb-6">
            Join our community of creators who are maximizing their revenue and building sustainable digital businesses.
          </p>
          
          {/* Simplified benefits list */}
          <div className="mb-8 space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center">
                <benefit.icon className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-white/80">{benefit.text}</span>
              </div>
            ))}
          </div>
          
          {/* Simplified CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg w-full sm:w-auto"
              asChild
            >
              <Link to="/contact" className="flex items-center justify-center gap-2 px-8 py-3">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="bg-black border border-gray-700 hover:border-gray-600 text-white rounded-lg w-full sm:w-auto"
              asChild
            >
              <Link to="/pricing" className="flex items-center justify-center gap-2 px-8 py-3">
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
          
          {/* Simplified social proof */}
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-red-500" />
                ))}
              </div>
              <span className="ml-2 text-white/70 text-sm">from 400+ satisfied clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
