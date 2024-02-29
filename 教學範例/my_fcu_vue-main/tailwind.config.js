/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '520px',
      'tablet': '920px',
    },
    colors: {
      'main-deep': '#800080',
      ...colors,
    },
  },
  plugins: [],
}

