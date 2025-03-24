
import React from 'react';

const LuxuryBanner = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-primary to-primary-darker relative overflow-hidden mt-0">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
          Luxury Management for Elite Professionals
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Discreet, professional services tailored exclusively for high-end creators and professionals
        </p>
      </div>
    </section>
  );
};

export default LuxuryBanner;
