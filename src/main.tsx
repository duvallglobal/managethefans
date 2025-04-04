import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css'

try {
  const root = document.getElementById('root')
  if (!root) throw new Error('Root element not found')

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
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
