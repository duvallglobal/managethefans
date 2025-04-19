import { useEffect } from 'react';
import { useIsLowEndDevice } from './useIsLowEndDevice';
import { canRunHeavyAnimations, prefersReducedMotion } from '@/utils/performance';

export function useOptimizedAnimations() {
  const isLowEndDevice = useIsLowEndDevice();
  const reduceMotion = prefersReducedMotion();

  useEffect(() => {
    // Skip animations completely on reduced motion or very low-end devices
    if (reduceMotion || isLowEndDevice) {
      document.querySelectorAll('.animate-on-load, .animate-on-scroll, .animate-float, .animate-pulse-glow')
        .forEach(el => {
          // Remove animation classes
          el.classList.remove(
            'animate-on-load', 
            'animate-on-scroll', 
            'animate-float', 
            'animate-pulse-glow',
            'animate-fade-up'
          );
          // Add final state classes
          el.classList.add('opacity-100', 'translate-y-0');
        });
      return;
    }
    
    // Use simpler animations for medium-performance devices
    const runHeavy = canRunHeavyAnimations();
    
    // Simple easing function for better performance
    const easing = runHeavy 
      ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' // Spring-like easing (expensive)
      : 'cubic-bezier(0.25, 0.1, 0.25, 1)'; // Simple ease-out (cheaper)
    
    // Add CSS for more efficient animations
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      :root {
        --animation-enabled: ${runHeavy ? 1 : 0};
      }
      
      .animate-on-load, .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ${easing}, transform 0.6s ${easing};
      }
      
      .animate-on-scroll.slide-in {
        transform: translateX(20px);
      }
      
      .animate-on-scroll.fade-scale {
        transform: scale(0.95);
      }
      
      .animate-on-load.opacity-100, .animate-on-scroll.opacity-100 {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      
      /* Limit staggered animations to 5 items max */
      .animate-var-1 { transition-delay: 0.05s; }
      .animate-var-2 { transition-delay: 0.1s; }
      .animate-var-3 { transition-delay: 0.15s; }
      .animate-var-4 { transition-delay: 0.2s; }
      .animate-var-5 { transition-delay: 0.25s; }
      
      /* Optimized float animation - less movement */
      .animate-float {
        animation: simplified-float 5s ease-in-out infinite;
        animation-play-state: var(--animation-enabled, 1) ? 'running' : 'paused';
      }
      
      @keyframes simplified-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-7px); }
      }
      
      /* Optimized glow animation - opacity only */
      .animate-pulse-glow {
        animation: simplified-glow 4s ease-in-out infinite;
        animation-play-state: var(--animation-enabled, 1) ? 'running' : 'paused';
      }
      
      @keyframes simplified-glow {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 1; }
      }
    `;
    document.head.appendChild(styleSheet);
    
    // Batched animation handling for better performance
    setTimeout(() => {
      // Process load animations in one batch
      const loadElements = document.querySelectorAll('.animate-on-load');
      if (loadElements.length > 0) {
        // Apply basic delays to prevent all animations at once
        loadElements.forEach((el, index) => {
          // Limit concurrent animations by batching
          const batchDelay = Math.floor(index / 5) * 200; // 5 items per batch
          const itemDelay = (index % 5) * 50; // Stagger items within batch
          const totalDelay = batchDelay + itemDelay;
          
          setTimeout(() => {
            el.classList.add('animate-in-progress');
            el.classList.add('opacity-100');
            
            // Clean up will-change after animation
            setTimeout(() => {
              el.classList.remove('animate-in-progress');
              el.classList.add('animation-completed');
            }, 700); // Animation duration
          }, totalDelay);
        });
      }
      
      // Set up intersection observer for scroll animations
      const scrollElements = document.querySelectorAll('.animate-on-scroll');
      if (scrollElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const el = entry.target;
              
              // Add animation classes
              el.classList.add('animate-in-progress');
              el.classList.add('opacity-100');
              
              // Clean up will-change after animation
              setTimeout(() => {
                el.classList.remove('animate-in-progress');
                el.classList.add('animation-completed');
              }, 700);
              
              observer.unobserve(el);
            }
          });
        }, { 
          threshold: 0.15,
          rootMargin: '0px 0px -100px 0px' 
        });
        
        // Limit number of observed elements for performance
        const maxObserved = Math.min(scrollElements.length, 20);
        for (let i = 0; i < maxObserved; i++) {
          observer.observe(scrollElements[i]);
        }
      }
    }, 100); // Short delay for browser to process styles
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [isLowEndDevice, reduceMotion]);
}
