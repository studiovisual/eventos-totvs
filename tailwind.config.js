/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'principal-black': '#363636',
        'principal-blue' : '#0897E9',
        'secundare-orange': '#FEAC0E',
        'secundare-gray': '#EEEEEE',
        'complementary-green': '#0ADBE3',
        'complementary-purple': '#0ADBE3',
      }
    },
  },
  plugins: [],
}
