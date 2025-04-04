const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "rgb(51 51 51 / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(153 0 0 / <alpha-value>)",
          darkest: "#330000",
          darker: "#660000",
        },
        "primary-foreground": "rgb(255 255 255 / <alpha-value>)",
        // Add any other custom colors you need
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        nunito: ["Nunito", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}
