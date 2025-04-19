#!/bin/bash

echo "🧹 Cleaning up previous installation..."
rm -rf node_modules
rm -rf .yarn 
rm -f yarn.lock
rm -f package-lock.json

echo "🧼 Cleaning yarn cache..."
yarn cache clean

echo "📦 Installing dependencies..."
yarn install

echo "🔄 Ensuring TypeScript type definitions..."
yarn add -D @types/react@^18.2.48 @types/react-dom@^18.2.18 @types/node@^20.11.0 @types/ws@^8.5.10

# Specifically fix the Vite React plugin issue
echo "🛠️ Fixing Vite plugin issue..."
yarn remove @vitejs/plugin-react
yarn add -D @vitejs/plugin-react-swc@^3.5.0

echo "🔍 Attempting TypeScript compile with skipLibCheck..."
yarn tsc --skipLibCheck

echo "✅ Installation complete!"
echo ""
echo "To start the development server, run:"
echo "  yarn dev"
echo ""
echo "If TypeScript errors persist, run:"
echo "  yarn typecheck"
echo ""
echo "If stylelint errors persist, run:"
echo "  yarn lint:css"