import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Button, buttonVariants } from '../../components/ui/button';
import useWindowSize from '@/hooks/useWindowSize';

// Define platform blobs for the background
const platformBlobs = [
  { name: 'RentMen', color: 'from-red-900 to-red-600', position: 'top-[10%] right-[20%]', size: 'w-24 h-24', delay: 0 },
  { name: 'OnlyFans', color: 'from-blue-600 to-blue-400', position: 'top-[30%] right-[15%]', size: 'w-20 h-20', delay: 2 },
  { name: 'Instagram', color: 'from-pink-600 to-purple-600', position: 'bottom-[20%] right-[25%]', size: 'w-28 h-28', delay: 1 },
  { name: 'TikTok', color: 'from-cyan-400 to-teal-400', position: 'bottom-[40%] right-[10%]', size: 'w-16 h-16', delay: 3 },
  { name: 'Twitter', color: 'from-sky-600 to-sky-400', position: 'top-[50%] right-[30%]', size: 'w-14 h-14', delay: 2.5 },
  { name: 'YouTube', color: 'from-red-600 to-red-400', position: 'bottom-[30%] right-[40%]', size: 'w-18 h-18', delay: 1.5 },
  { name: 'LinkedIn', color: 'from-blue-800 to-blue-600', position: 'top-[40%] right-[40%]', size: 'w-12 h-12', delay: 0.5 },
  { name: 'Chaturbate', color: 'from-orange-500 to-yellow-500', position: 'bottom-[15%] right-[15%]', size: 'w-16 h-16', delay: 4 },
  { name: 'JustForFans', color: 'from-purple-600 to-purple-400', position: 'top-[20%] right-[35%]', size: 'w-22 h-22', delay: 1.8 },
];

// Platform blob component with animation
const PlatformBlob = ({ color, position, size, delay }: { color: string; position: string; size: string; delay: number }) => {
  return (
    <motion.div
      className={`absolute ${position} ${size} rounded-full bg-gradient-to-br ${color} opacity-20 mix-blend-screen blur-xl`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{
        duration: 5,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
};

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const isMobile = width < 768; // MD breakpoint in Tailwind
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Make sure the section has position relative for proper scroll calculations
  useEffect(() => {
    const section = ref.current;
    if (section) {
      const computedStyle = window.getComputedStyle(section);
      if (computedStyle.position === 'static') {
        section.style.position = 'relative';
      }
    }
  }, []);

  // Mouse movement effect
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Simple parallax effect
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="relative w-full overflow-hidden bg-black hero-section min-h-[90vh] flex items-center"
    >
      {/* Enhanced layered animated background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Improved base gradient with more depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#120000] to-[#300000]"></div>
        
        {/* Enhanced textured overlay with better blend mode */}
        <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-noise"></div>
        <div className="absolute inset-0 opacity-40 mix-blend-screen bg-gradient-to-t from-red-900/20 to-transparent"></div>
        
        {/* Larger, more vibrant glowing orbs */}
        <motion.div
          className="absolute -left-20 top-[20%] w-[400px] h-[400px] rounded-full bg-red-800/20 blur-[120px] mix-blend-screen"
          animate={{
            x: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute -right-40 bottom-[10%] w-[500px] h-[500px] rounded-full bg-red-700/15 blur-[150px] mix-blend-screen"
          animate={{
            x: [0, -40, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Enhanced platform-specific glowing blobs */}
        {platformBlobs.map((blob, index) => (
          <PlatformBlob
            key={index}
            color={blob.color}
            position={blob.position}
            size={blob.size}
            delay={blob.delay}
          />
        ))}
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.04] bg-[length:30px_30px] mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          {/* Enhanced content area */}
          <motion.div
            className="relative z-10 w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={!isMobile ? {
              transform: `translate3d(${mousePosition.x * -20}px, ${mousePosition.y * -20}px, 0px)`,
            } : undefined}
          >
            {/* Badge removed as requested */}

            {/* Enhanced heading with better typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white mt-6 mb-6"
            >
              Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 font-bold">Digital Empire</span> With Expert Management
            </motion.h1>

            {/* Enhanced description with better clarity */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-white/80 text-lg md:text-xl leading-relaxed max-w-[50ch] mb-8"
            >
              Premium management solutions that maximize your revenue, grow your audience, and save you valuable time. Let us handle the details while you focus on creating exceptional content.
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {[
                { icon: "✓", text: "Revenue Optimization" },
                { icon: "✓", text: "Audience Growth" },
                { icon: "✓", text: "Content Strategy" },
                { icon: "✓", text: "Platform Management" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">{feature.icon}</span>
                  <span className="text-white/80 text-sm">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Enhanced CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Button
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full bg-gradient-to-r from-red-800 to-red-600 border border-red-700/30 shadow-xl hover:shadow-red-600/30 hover:scale-105 transition-all duration-300"
                )}
                asChild
              >
                <Link to="/contact" className="px-8 py-6 flex items-center gap-2 text-base">
                  Get Started Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-1 h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
              <Button
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full border-red-900/20 bg-black/40 backdrop-blur-lg hover:bg-black/50 text-white hover:scale-105 transition-all duration-300"
                )}
                asChild
              >
                <Link to="/pricing" className="px-8 py-6 text-base">View Services</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Embedded Spline 3D graphic as requested */}
          <div
            className={`
              ${isMobile ? 'relative w-full h-[50vh] mt-8' : 'relative md:absolute right-0 w-full md:w-[60%] h-full'}
              z-[1] overflow-hidden
            `}
          >
            {/* Embedded Spline iframe */}
            <div className="w-full h-full">
              <iframe 
                src='https://my.spline.design/worldplanetdarkred-QzC49mSKw6j7POcMUuMV5Uuw/' 
                frameBorder='0' 
                width='100%' 
                height='100%'
                title="3D World Planet Dark Red"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
