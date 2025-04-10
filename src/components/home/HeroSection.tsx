import React, { useRef, useEffect, useState, ErrorInfo, Component } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { buttonVariants } from '../../components/ui/button';

// Error boundary to prevent Spline failures from crashing the entire page
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

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [splineError, setSplineError] = useState(false);

  const SPLINE_SCENE_URL = "https://prod.spline.design/WqA05cwHRcVcpKqp/scene.splinecode";

  // Load the Spline viewer web component
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
    script.type = 'module';
    
    // Handle load events
    script.onload = () => {
      console.log('Spline viewer script loaded');
      setIsSplineLoaded(true);
    };
    
    script.onerror = (error) => {
      console.error('Failed to load Spline viewer script:', error);
      setSplineError(true);
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Clean up script if component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Add global error logging
  useEffect(() => {
    const handleGlobalError = (e: ErrorEvent) => {
      console.error('Global Error:', e.message);
      // If the error relates to Spline or fetching, set the splineError state
      if (e.message.includes('Spline') || e.message.includes('fetch')) {
        setSplineError(true);
      }
    };
    
    window.addEventListener('error', handleGlobalError);
    
    return () => {
      window.removeEventListener('error', handleGlobalError);
    };
  }, []);

  // Check if mobile on initial render and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const parallaxInstance = parallaxRef.current;
    
    // Simple parallax effect for enhanced visual depth
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxInstance) return;
      
      const moveX = (e.clientX - window.innerWidth / 2) / -50;
      const moveY = (e.clientY - window.innerHeight / 2) / -50;
      
      const elements = parallaxInstance.querySelectorAll('.parallax-element');
      elements.forEach(element => {
        const el = element as HTMLElement;
        const depth = parseFloat(el.getAttribute('data-depth') || '0');
        const translateX = moveX * depth;
        const translateY = moveY * depth;
        
        el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    };

    // Only add mousemove handler if not mobile
    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  // Fallback element when Spline fails to load
  const SplineFallback = () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black opacity-70">
      {/* Optional: Add some visual indication that would normally be shown by the 3D scene */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl -right-64 top-1/2 transform -translate-y-1/2"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/5 blur-2xl -right-32 top-1/3"></div>
      </div>
    </div>
  );

  return (
    <section className="relative flex flex-col md:flex-row items-center bg-black min-h-[90vh] overflow-hidden pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      
      {/* Spline container with responsive positioning */}
      <div 
        className={`
          ${isMobile ? 'relative w-full h-[50vh] -mb-16' : 'absolute right-0 w-[50%] h-screen'}
          z-[1] overflow-hidden
        `}
      >
        {/* Always render a container for either Spline or fallback */}
        <div className="w-full h-full relative">
          {/* Fallback background always present */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-40" />
          
          {/* Spline Web Component wrapped in error boundary */}
          <SplineErrorBoundary>
            <div className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
              {!splineError ? (
                <spline-viewer 
                  url={SPLINE_SCENE_URL} 
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    opacity: isSplineLoaded ? 1 : 0,
                    transition: 'opacity 1s ease'
                  }}
                ></spline-viewer>
              ) : (
                <SplineFallback />
              )}
            </div>
          </SplineErrorBoundary>
          
          {/* Debug info - only shown during development */}
          {import.meta.env.DEV && (
            <div className="absolute bottom-4 right-4 text-xs text-white bg-black/50 p-2 rounded">
              Status: {isSplineLoaded ? 'Loaded' : 'Loading'} 
              {splineError ? ' (Error)' : ''}
            </div>
          )}
        </div>
      </div>
      
      <div ref={parallaxRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4 md:py-8 w-full">
        <div className={`
          grid grid-cols-1 md:grid-cols-12 gap-8 items-center
        `}>
          {/* Text Content */}
          <div className={`
            space-y-6 text-center md:text-left md:col-span-7
            ${isMobile ? '-mt-24' : ''}
          `}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 parallax-element"
              data-depth="0.2"
            >
              <span className="text-sm font-medium text-primary">Premium Digital Management</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight parallax-element"
              data-depth="0.1"
            >
              Elevate Your <br />
              <span className="text-gradient-red">Online Influence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl parallax-element"
              data-depth="0.15"
            >
              Expert management solutions for premium creators and influencers. Transform your online presence into a thriving business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 parallax-element"
              data-depth="0.25"
            >
              <Link 
                to="/pricing" 
                className={cn(
                  buttonVariants({ 
                    size: "lg", 
                    variant: "default" 
                  }),
                  "bg-primary hover:bg-primary-darker text-white font-medium"
                )}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link 
                to="/contact" 
                className={cn(
                  buttonVariants({ 
                    size: "lg", 
                    variant: "outline" 
                  }),
                  "border-gray-600 text-white hover:bg-gray-800"
                )}
              >
                <span className="text-sm font-medium text-primary">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Book Consultation
                </span>
              </Link>
            </motion.div>
          </div>
          
          {/* Empty column for spacing that helps position the globe */}
          <div className="hidden md:block md:col-span-5"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

