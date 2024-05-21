/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#EAF8F6",
        secondary: "#0D6C5F",
        white: "#ffffff",
        balanpy: {
          50: "#EAF8F6",
          100: "#D5F4F0",
          200: "#C6EBE6",
          300: "#B1E5DE",
          400: "#9FE2D9",
          500: "#87D5CA",
          DEFAULT: "#70CABD",
          600: "#70CABD",
          700: "#48BAAA",
          800: "#279D8D",
          900: "#0D6C5F",
        },
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimGray: "#E8E8E8",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        yellow: colors.yellow,
        emerald: colors.emerald,
        black: colors.black,
        gray: colors.gray,
        red: colors.red,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

