/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0a0e27",
          800: "#16213e",
          700: "#1f3a5f",
        },
        gold: "#d4af37",
        neon: {
          cyan: "#00ffff",
          purple: "#ff006e",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
}