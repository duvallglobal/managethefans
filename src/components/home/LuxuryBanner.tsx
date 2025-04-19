import { FC } from "react";
import { motion } from "framer-motion";

const LuxuryBanner: FC = () => {
  const brands = ["OnlyFans", "Instagram", "TikTok", "Twitter", "YouTube", "Rent.Men"];

  return (
    <div className="relative w-full py-8 overflow-hidden">
      {/* Dark gradient background with red accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#100000] to-black"></div>
      
      {/* Red accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      
      {/* Red accent line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3">
            {/* Reduced font size from text-6xl to text-5xl on large screens */}
            Premium Management for <span className="text-gradient-red">Elite Creators</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-400 max-w-2xl mx-auto">
            {/* Slightly increased content text size, particularly on larger screens */}
            The ultimate solution for content creators who demand excellence
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-black/30 backdrop-blur-md border border-[#660000]/20 rounded-full text-white text-sm font-medium"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LuxuryBanner;
