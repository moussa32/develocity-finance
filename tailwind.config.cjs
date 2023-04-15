const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', ...fontFamily.sans],
    },
    extend: {
      fontSize: {
        "6.5xl": "4rem",
      },
      colors: {
        primary: "#9c3fe5",
        secondary: "#3C3C3C",
      },
      borderWidth: {
        1: "1px",
      },
      screens: {
        xs: "360px",
      },
      margin: {
        4.5: "18px",
      },
      padding: {
        4.5: "18px",
      },
      textUnderlineOffset: {
        3: "3px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0",
        },
        screens: {
          xl: "1216px",
        },
      },
      fontFamily: {
        PolySans: ["PolySans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
