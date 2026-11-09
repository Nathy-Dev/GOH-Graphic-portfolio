import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: "#1E4FC2",
            dark: "#1A3A8F",
            light: "#3B6FE8",
            50: "#EEF3FD",
            100: "#D5E0FB",
            200: "#ACC1F7",
            900: "#0D2260",
          },
          orange: {
            DEFAULT: "#F28C28",
            dark: "#D4720A",
            light: "#F7AC5C",
            50: "#FEF5EA",
            100: "#FDE8C8",
          },
        },
        surface: {
          DEFAULT: "#F8F9FF",
          dark: "#0A0E1A",
          card: "#FFFFFF",
          "card-dark": "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-left": "slideLeft 0.6s ease forwards",
        "slide-right": "slideRight 0.6s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0A0E1A 0%, #0D2260 50%, #0A0E1A 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(30,79,194,0.1) 0%, rgba(242,140,40,0.05) 100%)",
        "orange-blue":
          "linear-gradient(135deg, #F28C28 0%, #1E4FC2 100%)",
      },
      boxShadow: {
        "glow-blue": "0 0 30px rgba(30,79,194,0.3)",
        "glow-orange": "0 0 30px rgba(242,140,40,0.3)",
        "card": "0 4px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 12px 48px rgba(30,79,194,0.15)",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};

export default config;

