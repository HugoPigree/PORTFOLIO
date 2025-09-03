import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1140px" }},
    extend: {
      colors: {
        bg: { DEFAULT: "#0d1117" },          // fond plus sombre
        panel: { DEFAULT: "rgba(255,255,255,0.04)" }, // cartes glass
        stroke: { DEFAULT: "rgba(255,255,255,0.08)" },
        primary: { DEFAULT: "#3b82f6" },     // bleu d'accent
        accent: { DEFAULT: "#3b82f6" }       // un seul accent
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,.35)",
        glow: "0 0 0 2px rgba(59,130,246,.25), 0 0 30px rgba(59,130,246,.25)"
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } }
      },
      animation: {
        float: "float 8s ease-in-out infinite"
      }
    }

  },
  plugins: []
} satisfies Config;
