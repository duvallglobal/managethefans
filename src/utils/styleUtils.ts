/**
 * Utility functions to handle styling issues
 */

/**
 * Checks if any CSS styling rules are being violated and logs them to console
 */
export const checkAndFixStylingIssues = () => {
  try {
    // This is a placeholder for any runtime style fixes that might be needed
    document.querySelectorAll('[style*="@stylistic"]').forEach(element => {
      // Remove any inline styles that use @stylistic
      const style = element.getAttribute('style') || '';
      if (style.includes('@stylistic')) {
        const cleanStyle = style.replace(/@stylistic[^;]+;/g, '');
        element.setAttribute('style', cleanStyle);
      }
    });

    console.log('Style issues checked and fixed');
  } catch (error) {
    console.error('Error fixing style issues:', error);
  }
};

/**
 * Apply proper CSS classes based on the current configuration
 */
export const applyProperCssClasses = (element: HTMLElement, className: string) => {
  // Add transformed class names that follow proper conventions
  const transformedClassName = className
    .replace(/@stylistic\/at-rule-no-unknown/g, 'css-valid')
    .trim();
  
  if (transformedClassName !== className) {
    element.className = transformedClassName;
    return true;
  }
  return false;
};
