/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'overlay': "rgba(7, 7, 247, 0.415);"
      }
    },
  },
  plugins: [],
}

