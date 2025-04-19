import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Changed to react-swc for better stability
import { resolve } from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-htaccess',
      closeBundle() {
        const htaccessContent = `
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`;
        fs.writeFileSync(resolve(__dirname, 'dist', '.htaccess'), htaccessContent);
        console.log('Created .htaccess file in dist directory');
      },
    },
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    hmr: {
      overlay: true,
    },
  },
});
