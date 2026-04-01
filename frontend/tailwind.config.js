/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          rich: "#050505",    // Base surface
          red: "#ff0000",     // Primary
          orange: "#ff8c00",  // Secondary
          yellow: "#ffdb00",  // Tertiary
        },
      },
      fontFamily: {
        // Enforcing Sans-Serif globally
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}