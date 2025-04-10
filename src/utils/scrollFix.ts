/**
 * Utility function to ensure elements have proper positioning for scroll calculations
 * 
 * This function checks if an element has static positioning and sets it to relative
 * which is required for proper scroll calculations with libraries like Framer Motion
 */
export function ensureProperPositioning(element: HTMLElement | null): void {
  if (!element) return;
  
  const computedStyle = window.getComputedStyle(element);
  if (computedStyle.position === 'static') {
    // Set position to relative for proper scroll calculation
    element.style.position = 'relative';
  }
}

/**
 * Function to fix all scroll container elements in the application
 * 
 * This should be called once on application mount to ensure proper scroll behavior
 */
export function fixScrollContainers(): void {
  // Fix elements with data-scroll attribute
  document.querySelectorAll('[data-scroll]').forEach(el => {
    ensureProperPositioning(el as HTMLElement);
  });

  // Fix common scroll containers
  const scrollContainers = [
    document.querySelector('main'),
    document.querySelector('#root'),
    ...Array.from(document.querySelectorAll('section')),
    ...Array.from(document.querySelectorAll('.scroll-container'))
  ];

  scrollContainers.forEach(el => ensureProperPositioning(el as HTMLElement));
} 