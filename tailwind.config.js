/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      outfit : ['Outfit', 'sans-serif'],
      poppins : [ 'Poppins', 'sans-serif']
    },
    
    extend: {
      colors:{
        bgDark:  "#1E1E1E",
        purple: "#3E008D",
        Gray: "#C9C9CB",
        Yellow: "#FFCD1A",
        Green: "#0B9020",
        Pink : "#DA06C5",
        Blue : "#061ADA"
      }
    },
  },
  plugins: [],
}

