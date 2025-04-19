import { useState, useEffect } from 'react';

/**
 * Hook to lazily render components only when they would be visible
 * This helps reduce initial load and improves performance
 * @param inViewport Whether the component's container is in the viewport
 * @param delay Optional delay before rendering
 */
export function useLazyComponent(inViewport: boolean, delay: number = 200): boolean {
  const [shouldRender, setShouldRender] = useState(false);
  
  useEffect(() => {
    if (!inViewport) return;
    
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [inViewport, delay]);
  
  return shouldRender;
}
