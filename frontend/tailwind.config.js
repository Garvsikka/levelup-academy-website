/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The Black Base
        'black': '#000000', 
        'dark-card': '#0a0a0a',
        // The Volcanic Palette
        'brand-red': '#FF0000',   // corrected red
        'brand-orange': '#FF7E00', // corrected orange
        'brand-yellow': '#FFCC00',
      },
      backgroundImage: {
        'lava-gradient': 'linear-gradient(to right, #FF0000, #FF7E00, #FFCC00)',
      }
    },
  },
  plugins: [],
}
