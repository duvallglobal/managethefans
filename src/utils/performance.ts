/**
 * Utility functions to optimize performance
 */

// Extend Navigator interface to include deviceMemory
interface ExtendedNavigator extends Navigator {
  deviceMemory?: number;
}

// Check if reduced motion is preferred
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Only run heavy animations if the device is powerful enough
export const canRunHeavyAnimations = (): boolean => {
  // Check for high-end devices (adjust thresholds as needed)
  const nav = navigator as ExtendedNavigator;
  const hasEnoughRAM = nav.deviceMemory ? nav.deviceMemory >= 4 : true;
  const hasEnoughCores = navigator.hardwareConcurrency ? navigator.hardwareConcurrency >= 4 : true;
  
  return hasEnoughRAM && hasEnoughCores && !prefersReducedMotion();
};

// IntersectionObserver factory for lazy animations
export function createIntersectionObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    ...options
  });

  return observer;
}

/**
 * Apply performance optimizations to animations
 */
export function optimizeAnimations(): void {
  // Reduce repaints by using transform and opacity
  const animatedElements = document.querySelectorAll('.animate-on-load, .animate-on-scroll');
  animatedElements.forEach(el => {
    // Force hardware acceleration
    (el as HTMLElement).style.willChange = 'transform, opacity';
    (el as HTMLElement).style.backfaceVisibility = 'hidden';
  });
}

// Initialize performance optimizations
export const initializePerformanceOptimizations = (): void => {
  // Disable animations if user prefers reduced motion
  if (prefersReducedMotion()) {
    document.body.classList.add('reduce-motion');
  }
  
  // Limit animations based on device capability
  if (!canRunHeavyAnimations()) {
    document.body.classList.add('reduce-animations');
  }
  
  // Set up lazy loading for animations
  const animatedElements = document.querySelectorAll('.animate-when-visible');
  
  if (animatedElements.length > 0) {
    const observer = createIntersectionObserver((entry) => {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Stop observing once animation is triggered
    });
    
    animatedElements.forEach(el => observer.observe(el));
  }
};

// Throttle function to limit frequency of function calls
export const throttle = <T extends (...args: unknown[]) => unknown>(func: T, limit: number): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  return function(...args: Parameters<T>): void {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
};
