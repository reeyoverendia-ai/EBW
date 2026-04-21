/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'sand': '#F5F2E9',
        'peach': '#F4B2A6',
        'matcha': '#88A45C',
        'olive': '#556B2F',
      },
      backgroundImage: {
        'empower-gradient': "linear-gradient(135deg, #F5F2E9 0%, #FAD9CF 35%, #D6E0B5 70%, #88A45C 100%)",
      }
    },
  },
  plugins: [],
}