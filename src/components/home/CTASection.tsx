
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/cad463e6-4289-4d2f-aca6-25a1b5fe09fd.png')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Our premium concierge services will help you maximize your potential and earnings.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary-darker text-white transition-all duration-300 shadow-red" asChild>
          <Link to="/contact">
            Start Your Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
