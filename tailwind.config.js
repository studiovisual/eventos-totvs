/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    extend: {
      colors: {
        principal: {
          black: '#363636',
          blue: '#0897E9',
        },
        secundare: {
          orange: '#FEAC0E',
          gray: '#EEEEEE',
        },
        complementary: {
          green: '#0ADBE3',
          purple: '#6B48FF',
        },
      }
    },
  },
  plugins: [],
}
