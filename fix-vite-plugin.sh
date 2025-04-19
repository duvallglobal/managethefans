#!/bin/bash

echo "🔧 Fixing Vite React plugin issue..."

# Remove the problematic packages
yarn remove @vitejs/plugin-react @vitejs/plugin-react-swc

# Clean the cache for these packages
yarn cache clean @vitejs/plugin-react
yarn cache clean @vitejs/plugin-react-swc

# Install only the SWC version (faster and more stable)
yarn add -D @vitejs/plugin-react-swc@^3.5.0

echo "✅ Fixed Vite plugin issue. Restart your development server with 'yarn dev'"
