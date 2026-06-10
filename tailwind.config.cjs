/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bs-yellow': '#FFD700',
        'bs-cyan': '#00E5FF',
        'bs-purple': '#9B59B6',
        'bs-dark': '#0F0F23',
        'bs-card': '#1a1a3e',
        'bs-gold': '#FEBE20',
        'bs-green': '#2CD730',
        'bs-red': '#E5301F',
        'bs-button': '#343c50',
        'bs-button-top': '#5A5371',
        'bs-button-bottom': '#252C3C',
      },
      fontFamily: {
        display: ['Lilita One', 'sans-serif'],
        body: ['Chakra Petch', 'sans-serif'],
      },
      skew: {
        '9': '-9deg',
      },
    },
  },
  plugins: [],
};
