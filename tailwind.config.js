/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'NavyTealSan': {
        Dark: '#2C3333',
        Strong: '#395B64',
        Default: '#A5C9CA',
        Light: '#E7F6F2'
      }
    },
    extend: {},
    fontFamily: {
      'FontSan': ['Fjalla One', 'sans-serif']
    }
  },
  plugins: [],
}

