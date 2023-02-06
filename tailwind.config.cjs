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
      screens: {
        xs: "360px",
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
