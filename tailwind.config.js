/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#275ED9', 
        secondary: "#2563EB",
        tertiary:"#BEBCBC",
        bgColor:"#F5F5F5",
      },
      fontFamily: {
        'abhaya': ['"Abhaya Libre"', 'serif'],
      },
    },
  },
  plugins: [],
}
