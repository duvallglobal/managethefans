import React, { useRef, useEffect, useState, ErrorInfo, Component } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Button, buttonVariants } from '../../components/ui/button';
import useWindowSize from '@/hooks/useWindowSize';
import Spline from '@splinetool/react-spline';
import ErrorBoundary from '@/components/ErrorBoundary';

// Error boundary specifically for Spline component
class SplineErrorBoundary extends Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Spline component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black opacity-70 flex items-center justify-center">
          <div className="text-white text-opacity-50 text-sm">3D Visual Unavailable</div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Need to declare the web component for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
      };
    }
  }
}

// Define the Spline component props with correct types for event handlers
type SplineProps = {
  scene: string;
  className?: string;
  onLoad?: () => void;
  onError?: (error: unknown) => void;
};

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

// As a fallback, use a simpler 3D element to avoid Spline issues
const SplineFallback = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center relative overflow-hidden">
      <div className="animate-float absolute w-40 h-40 rounded-full bg-primary/5 blur-2xl top-1/4 left-1/3"></div>
      <div className="animate-float absolute w-32 h-32 rounded-full bg-primary/5 blur-2xl bottom-1/4 right-1/3" style={{animationDelay: "1s"}}></div>
      <div className="animate-pulse-slow absolute w-60 h-60 rounded-full bg-primary/5 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

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
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const isMobile = width < 768; // MD breakpoint in Tailwind

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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

  const handleSplineLoad = () => {
    console.log('Spline loaded successfully');
    setIsSplineLoaded(true);
  };

  const handleSplineError = (err: unknown) => {
    console.error("Spline loading error:", err);
    setSplineError(true);
    setIsSplineLoaded(false);
  };

  // Updated Spline scene URL as requested
  const splineSceneUrl = "https://prod.spline.design/WqA05cwHRcVcpKqp/scene.splinecode";

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="relative w-full overflow-hidden bg-black hero-section"
    >
      {/* Layered animated background with black-to-deep-red gradient */}
      <div className="absolute inset-0 w-full h-full">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-primary-darkest"></div>
        
        {/* Textured overlay with blend mode */}
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-noise"></div>
        <div className="absolute inset-0 opacity-30 mix-blend-screen bg-gradient-to-t from-primary/10 to-transparent"></div>
        
        {/* Glowing orbs */}
        <motion.div 
          className="absolute -left-20 top-[20%] w-[300px] h-[300px] rounded-full bg-primary/20 blur-[100px] mix-blend-screen"
          animate={{
            x: [0, 20, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div 
          className="absolute -right-40 bottom-[10%] w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px] mix-blend-screen"
          animate={{
            x: [0, -30, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Platform-specific glowing blobs */}
        {platformBlobs.map((blob, index) => (
          <PlatformBlob 
            key={index}
            color={blob.color}
            position={blob.position}
            size={blob.size}
            delay={blob.delay}
          />
        ))}
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:40px_40px] mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Content area */}
          <motion.div 
            className={`relative z-10 w-full md:w-1/2 ${isMobile ? '-mt-24' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={!isMobile ? {
              transform: `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -15}px, 0px)`,
            } : undefined}
          >
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-black/20 border border-white/10 text-white/80 glassmorphism"
            >
              <span className="mr-2 text-primary animate-pulse">⭐</span>
              <span className="text-sm font-medium">Trusted by over 400+ clients</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-[2.5rem] md:text-[4rem] tracking-tight leading-tight text-white mt-6 mb-4"
            >
              Manage your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-darker animate-pulse-slow">digital presence</span> with ease
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-[50ch]"
            >
              Your all-in-one platform for content creators who want to simplify their workflow, maximize earnings, and grow their audience.
            </motion.p>

            {/* CTA buttons - centered */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mx-auto md:mx-0"
            >
              <Button 
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full backdrop-blur-lg bg-gradient-to-r from-red-900 to-red-700 border border-white/10 shadow-xl hover:shadow-red-500/20 hover:scale-105 transition-all duration-300"
                )}
                asChild
              >
                <Link to="/signup" className="px-8 py-6 flex items-center gap-2">
                  Start Free Trial
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
                  "rounded-full border-white/10 bg-black/20 backdrop-blur-lg hover:bg-black/30 text-white hover:scale-105 transition-all duration-300 glassmorphism"
                )}
                asChild
              >
                <Link to="/demo" className="px-8 py-6">Book Demo</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Globe - Spline container using Spline component */}
          <motion.div
            ref={splineContainerRef}
            className={`
              ${isMobile ? 'relative w-full h-[50vh] -mb-16 mt-8' : 'absolute right-0 w-[55%] h-full'}
              z-[1] pointer-events-none overflow-hidden
            `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={!isMobile ? {
              transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0px)`,
              position: 'relative', // Ensure position is set for scroll calculations
            } : {
              position: 'relative', // Ensure position is set for scroll calculations
            }}
          >
            {/* Glowing backdrop for the globe */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-primary/5 blur-[100px] mix-blend-screen"></div>
            
            {/* Fallback content to show if Spline fails to load */}
            {splineError && <SplineFallback />}
            
            {/* Wrapped Spline component with error boundary */}
            <ErrorBoundary
              fallback={<SplineFallback />}
            >
              {!splineError ? (
                <Spline
                  scene={splineSceneUrl}
                  onLoad={handleSplineLoad}
                  onError={handleSplineError}
                  className="w-full h-full scale-[0.9]"
                />
              ) : (
                <SplineFallback />
              )}
            </ErrorBoundary>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

