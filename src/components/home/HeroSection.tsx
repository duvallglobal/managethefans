import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse movement for subtle parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setMousePosition({ x, y });
  };
  
  return (
    <motion.div
      ref={heroRef}
      className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-black pt-24 pb-16 mb-8"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background gradient with dark red accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0000] to-[#200000]"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
      
      {/* Animated glow effect with dark red */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
        style={{
          left: `calc(${mousePosition.x * 100}% - 300px)`,
          top: `calc(${mousePosition.y * 100}% - 300px)`,
          transition: "left 0.5s ease-out, top 0.5s ease-out"
        }}
      />
      
      {/* Additional accent light */}
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary-darker to-primary/20 blur-[80px] opacity-30"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror"
        }}
        style={{
          right: '10%',
          top: '30%',
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Management for{" "}
              <span className="text-gradient-red relative">
                Content Creators
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-[#800000] to-transparent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional management and growth solutions for today's digital creators
            </p>
            
            <div className="flex justify-center">
              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 text-lg rounded-lg bg-gradient-to-r from-[#800000] to-[#cc0000] text-white font-semibold hover:from-[#990000] hover:to-[#cc0000] transition-all duration-300 shadow-glow hover:shadow-[#800000]/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

