import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import { initializePerformanceOptimizations } from './utils/performance'

// Add preload class to prevent transition flashing
document.documentElement.classList.add('preload');

// Initialize performance optimizations early
initializePerformanceOptimizations();

// Remove preload class after a short delay
window.addEventListener('load', () => {
  setTimeout(() => {
    document.documentElement.classList.remove('preload');
  }, 300);
});

try {
  const root = document.getElementById('root')
  if (!root) throw new Error('Root element not found')

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  )
} catch (error) {
  console.error('Failed to mount application:', error)
  document.body.innerHTML = `
    <div style="color: white; background: black; padding: 20px;">
      Failed to load application. Please check console for details.
    </div>
  `
}
