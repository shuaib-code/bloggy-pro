/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#16B364'
      },
      fontFamily:{
        plusJakartaSans : ['Plus Jakarta Sans', 'sans-serif'],
        inter : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

