/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#0A6AF6",
      secondary: "#4C54F8",
      lightGray: "#AEB7B4",
      lightBlue: "#A5ECD7",
      textColor: "#20202060",
    },
    screens: {
      'xs': '320px',
      'mid-xs': '400px',
      'sm': '480px',
      'mid-sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'mid-xl': '1280px',
      'xl': '1440px',
      'xxl': '1536px',
      'xxxl': '1920px',
    },
    extend: {},
  },
  plugins: [],
}

