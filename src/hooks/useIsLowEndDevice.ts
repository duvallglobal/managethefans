import { useState, useEffect } from 'react';

// Extend Navigator interface to include deviceMemory
interface ExtendedNavigator extends Navigator {
  deviceMemory?: number;
}

export function useIsLowEndDevice(): boolean {
  const [isLowEnd, setIsLowEnd] = useState<boolean>(false);

  useEffect(() => {
    // Check device capabilities
    const checkDeviceCapabilities = () => {
      // Check if deviceMemory API is available
      const nav = navigator as ExtendedNavigator;
      const lowMemory = 'deviceMemory' in navigator && nav.deviceMemory && nav.deviceMemory < 4;
      
      // Check CPU cores if available
      const lowCores = 'hardwareConcurrency' in navigator && navigator.hardwareConcurrency < 4;
      
      // Check for mobile or tablet
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Consider it a low-end device if any of these conditions are true
      return lowMemory || lowCores || isMobile || window.innerWidth < 768;
    };

    setIsLowEnd(checkDeviceCapabilities());
    
    // Re-check when visibility changes (e.g., user returns to tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setIsLowEnd(checkDeviceCapabilities());
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isLowEnd;
}
