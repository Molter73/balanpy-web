/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/app/**/*.{html,js}",
    ],
  theme: {
    extend: {
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

  plugins: [],
}

