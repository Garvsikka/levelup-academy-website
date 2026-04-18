/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./frontend/**/*.{js,ts,jsx,tsx}",   // added
    "./frontend/src/styles/**/*.css"     // added for globals.css
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000', 
        'dark-card': '#0a0a0a',
        'brand-red': '#FF0000',
        'brand-orange': '#FF7E00',
        'brand-yellow': '#FFCC00',
      },
      backgroundImage: {
        'lava-gradient': 'linear-gradient(to right, #FF0000, #FF7E00, #FFCC00)',
      }
    },
  },
  plugins: [],
}
