export default {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.ts',
    },
    autoprefixer: {},
    "postcss-safe-parser": {}, // Add this plugin for CSS parsing
  },
};
