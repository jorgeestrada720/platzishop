/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    colors:{
      ...colors,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
   ],
};




