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

// More sensitive detection for device performance
export const canRunHeavyAnimations = (): boolean => {
  // Check for high-end devices (more conservative thresholds)
  const nav = navigator as ExtendedNavigator;
  const hasEnoughRAM = nav.deviceMemory ? nav.deviceMemory >= 6 : false;
  const hasEnoughCores = navigator.hardwareConcurrency ? navigator.hardwareConcurrency >= 6 : false;
  
  // If we can't determine specifics, default to reducing animations
  const hasDeviceInfo = typeof nav.deviceMemory !== 'undefined' && typeof navigator.hardwareConcurrency !== 'undefined';
  if (!hasDeviceInfo) return false;
  
  return hasEnoughRAM && hasEnoughCores && !prefersReducedMotion();
};

// Can run minimal animations (very low threshold)
export const canRunMinimalAnimations = (): boolean => {
  return !prefersReducedMotion();
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

// Apply essential performance optimizations to animations
export function optimizeAnimations(): void {
  // Apply will-change only to elements that are actually animating
  const currentlyAnimating = document.querySelectorAll('.animate-in-progress');
  currentlyAnimating.forEach(el => {
    (el as HTMLElement).style.willChange = 'transform, opacity';
  });
  
  // Remove will-change from elements that completed their animations
  const animationCompleted = document.querySelectorAll('.animation-completed');
  animationCompleted.forEach(el => {
    (el as HTMLElement).style.willChange = 'auto';
  });
}

// Simplified version of throttle that's more aggressive
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

// Global animation performance settings
export const initializePerformanceOptimizations = (): void => {
  // Disable animations if user prefers reduced motion
  if (prefersReducedMotion()) {
    document.body.classList.add('reduce-motion');
    // Force disable all animations
    document.documentElement.style.setProperty('--enable-animations', '0');
  } else if (!canRunHeavyAnimations()) {
    document.body.classList.add('reduce-animations');
    // Enable only basic animations
    document.documentElement.style.setProperty('--enable-animations', '1');
  } else {
    // Full animations allowed
    document.documentElement.style.setProperty('--enable-animations', '2');
  }
  
  // Measure FPS and further reduce animations if needed
  monitorPerformance();
};

// Monitor performance and adjust animations dynamically
const monitorPerformance = () => {
  let lastTime = performance.now();
  let frameCount = 0;
  let lowFpsCount = 0;
  const startTime = performance.now();
  
  const checkFps = () => {
    const now = performance.now();
    const elapsed = now - lastTime;
    frameCount++;
    
    // Calculate FPS every second
    if (elapsed >= 1000) {
      const fps = (frameCount * 1000) / elapsed;
      
      // If FPS is consistently low, reduce animations
      if (fps < 30) {
        lowFpsCount++;
        if (lowFpsCount >= 3) {
          document.body.classList.add('reduce-animations');
          document.documentElement.style.setProperty('--enable-animations', '1');
        }
      } else {
        lowFpsCount = Math.max(0, lowFpsCount - 1);
      }
      
      frameCount = 0;
      lastTime = now;
    }
    
    // Stop monitoring after 30 seconds to save resources
    if (now - startTime < 30000) {
      requestAnimationFrame(checkFps);
    }
  };
  
  requestAnimationFrame(checkFps);
};
