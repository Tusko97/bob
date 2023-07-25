/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      rotate: {
        360: '360deg'
      },
      backgroundImage: {
        //hero: 'url("bob/public/images/1.jpg")', 
        // hero2: 'url("../public/images/w2.jpeg")'
      } 
 
    },
  },
  plugins: [],
}

