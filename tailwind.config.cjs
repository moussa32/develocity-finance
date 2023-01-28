const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Inter"', ...fontFamily.sans],
    },
    extend: {
      screens: {
        xs: "360px",
      },
      container: {
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
