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
        sideHover:"#E7F0FA",
        warning:"#FFF6E6",
        success:"#E7F6EA"
      },
      fontFamily: {
        'abhaya': ['"Abhaya Libre"', 'serif'],
      },
    },
  },
  plugins: [],
}
