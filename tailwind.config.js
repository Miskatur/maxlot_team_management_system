/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/src/keep-preset.js";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    colors: {
      primary: "#0A6AF6",
      secondary: "#4C54F8",
      lightGray: "#AEB7B4",
      lightBlue: "#A5ECD7",
      textColor: "#20202060",
      white: "#ffffff",
      black: '#000000'
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

