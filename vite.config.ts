import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    strictPort: false, // Allow Vite to use another port if 8080 is taken
    hmr: {
      overlay: true, // Show errors as overlay
    },
  },
  plugins: [
    react({
      // Improved SWC configuration
      jsxImportSource: 'react',
      tsDecorators: true,
      devTarget: 'es2022',
    }),
    {
      name: 'copy-htaccess',
      closeBundle() {
        // Ensure the .htaccess file exists in the build directory
        const htaccessContent = `
RewriteEngine On
RewriteBase /
RewriteRule ^index\\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
        `.trim();
        fs.writeFileSync(path.resolve(__dirname, 'dist/.htaccess'), htaccessContent);
        console.log('Created .htaccess file in dist directory');
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.(js|jsx|ts|tsx)$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      },
      target: 'es2022',
    },
  },
  build: {
    sourcemap: true, // Generate sourcemaps for better debugging
    reportCompressedSize: false, // Speed up build by skipping size reporting
    chunkSizeWarningLimit: 1000, // Increase warning limit for large chunks
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Configure manual chunks for larger dependencies
          if (id.includes('node_modules')) {
            if (id.includes('@splinetool')) {
              return 'vendor-spline';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            return 'vendor';
          }
        }
      }
    },
  },
});
