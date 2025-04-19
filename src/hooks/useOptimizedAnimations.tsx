import { useEffect } from 'react';
import { useIsLowEndDevice } from './useIsLowEndDevice';

export function useOptimizedAnimations() {
  const isLowEndDevice = useIsLowEndDevice();

  useEffect(() => {
    // Skip animations on low-end devices
    if (isLowEndDevice) {
      document.querySelectorAll('.animate-on-load, .animate-on-scroll').forEach(el => {
        el.classList.add('opacity-100', 'translate-y-0');
      });
      return;
    }
    
    // Natural easing cubic-bezier for organic movement
    const naturalEasing = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
    const subtleEasing = 'cubic-bezier(0.25, 0.1, 0.25, 1)';
    
    // Add CSS for more fluid animations to document head
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
      .animate-on-load, .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.7s ${naturalEasing}, transform 0.7s ${naturalEasing};
      }
      
      .animate-on-load.fade-in, .animate-on-scroll.fade-in {
        transform: scale(0.97);
      }
      
      .animate-on-load.slide-in, .animate-on-scroll.slide-in {
        transform: translateX(20px);
      }
      
      .animate-on-load.fade-scale, .animate-on-scroll.fade-scale {
        transform: scale(0.97);
      }
      
      .animate-on-load.opacity-100, .animate-on-scroll.opacity-100 {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      
      /* Staggered animations with slightly random timing */
      .animate-var-1 { transition-delay: 0.05s; }
      .animate-var-2 { transition-delay: 0.12s; }
      .animate-var-3 { transition-delay: 0.19s; }
      .animate-var-4 { transition-delay: 0.26s; }
      .animate-var-5 { transition-delay: 0.33s; }
      .animate-var-6 { transition-delay: 0.40s; }
      .animate-var-7 { transition-delay: 0.47s; }
    `;
    document.head.appendChild(styleSheet);
    
    // Immediately animate elements with animate-on-load class with staggered delays
    document.querySelectorAll('.animate-on-load').forEach((el, index) => {
      // Add slight random variation to make animations feel less robotic
      const baseDelay = index * 80; // Faster initial sequence
      const variationDelay = Math.floor(Math.random() * 40); // Random additional delay
      const totalDelay = baseDelay + variationDelay;
      
      // Add slight random animation variation class for more organic feel
      const variationClass = `animate-var-${Math.min(Math.floor(Math.random() * 7) + 1, 7)}`;
      el.classList.add(variationClass);
      
      setTimeout(() => {
        el.classList.add('opacity-100');
      }, totalDelay);
    });
    
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute('data-delay') || '0';
          const baseDelay = parseInt(delay);
          const variationDelay = Math.floor(Math.random() * 40); // Random additional delay
          const totalDelay = baseDelay + variationDelay;
          
          // Add slight random animation variation class
          const variationIndex = Math.min(Math.floor(Math.random() * 7) + 1, 7);
          const variationClass = `animate-var-${variationIndex}`;
          el.classList.add(variationClass);
          
          setTimeout(() => {
            el.classList.add('opacity-100');
          }, totalDelay);
          
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
      document.head.removeChild(styleSheet);
    };
  }, [isLowEndDevice]);
}
