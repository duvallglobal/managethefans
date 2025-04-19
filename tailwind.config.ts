import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      display: ['Work Sans', 'sans-serif'],
      body: ['Work Sans', 'sans-serif'],
      sans: ['Work Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        heading: ['2.5rem', '3.25rem'],
        'heading-sm': ['2rem', '2.75rem'],
        'heading-lg': ['4rem', '4.5rem'],
      },
      colors: {
        primary: "#990000",
        "primary-darker": "#660000", 
        "primary-darkest": "#440000",
        accent: "#990000",
        muted: "#1A1A1A",
        background: "#000000",
        foreground: "#FFFFFF",
        border: "#333333",
        secondary: "#1A1A1A",
        "gradient-start": "#990000",
        "gradient-middle": "#660000",
        "gradient-end": "#440000",
        "text-foreground": "#FFFFFF",
        "text-primary": "#990000",
        "text-secondary": "#1A1A1A",
        "text-muted": "#777777",
        "muted-foreground": "#999999",
        "primary-foreground": "rgb(255 255 255 / <alpha-value>)",
        "platform-rentmen": "#990000",
        "platform-onlyfans": "#00AFF0",
        "platform-instagram": "#E1306C",
        "platform-tiktok": "#69C9D0",
        "platform-twitter": "#1DA1F2",
        "platform-youtube": "#FF0000",
        "platform-linkedin": "#0077B5",
        "platform-bluesky": "#1E9BF0",
        "platform-threads": "#101010",
        "platform-chaturbate": "#F79F24",
        "platform-justforfans": "#8B62E9",
      },
      spacing: {
        section: "4rem",
        container: "2rem",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "0.6",
          },
          "50%": {
            opacity: "1",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        glow: {
          "0%, 100%": {
            filter: "brightness(1)",
          },
          "50%": {
            filter: "brightness(1.3)",
          },
        },
        ripple: {
          "0%": {
            transform: "scale(0.8)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(2.4)",
            opacity: "0",
          },
        }
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "ripple": "ripple 1.5s infinite ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(to bottom right, rgba(136, 0, 0, 0.05), rgba(50, 0, 0, 0.1))",
        "red-gradient": "linear-gradient(to right, #990000, #660000, #440000)",
      },
      borderRadius: {
        'glass': '0.75rem',
      },
      backdropBlur: {
        'glass': '12px',
      },
      backgroundColor: {
        'glass': 'rgba(40, 10, 10, 0.2)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(102, 0, 0, 0.7), 0 0 30px rgba(102, 0, 0, 0.4)',
        'glow-intense': '0 0 20px rgba(102, 0, 0, 0.8), 0 0 40px rgba(102, 0, 0, 0.5), 0 0 60px rgba(102, 0, 0, 0.3)',
        'glow-soft': '0 0 15px rgba(102, 0, 0, 0.3), 0 0 30px rgba(102, 0, 0, 0.15)',
        'inner-glow': 'inset 0 0 15px rgba(102, 0, 0, 0.5)',
      },
    },
  },
  safelist: [
    "h-[300px]",
    "backdrop-blur-lg",
    "backdrop-blur-md",
    "backdrop-blur-sm",
    "backdrop-filter",
    "bg-black/10",
    "bg-black/20",
    "bg-black/30",
    "bg-white/5",
    "bg-white/10",
    "border-white/5",
    "border-white/10",
    "hover:border-white/20",
    "hover:scale-105",
    "hover:shadow-inner",
    "hover:ring-1",
    "ring-white/10",
    "transition-all",
    "duration-300",
    "ease-out",
    "text-muted-foreground",
    "tracking-tight",
    "leading-tight",
    "font-display",
    "font-body", 
    "mix-blend-screen",
    "mix-blend-overlay",
    "mix-blend-soft-light",
    "max-w-[50ch]",
    "text-[2.5rem]",
    "md:text-[4rem]",
    "shadow-glow",
    "shadow-glow-intense",
    "shadow-glow-soft",
    "shadow-inner-glow",
    "bg-glass",
    "text-gradient-red",
    "text-gradient-enhanced",
  ],
  plugins: [],
};

export default config;