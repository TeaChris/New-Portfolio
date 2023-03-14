/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "786px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      spacing: {
        line: "1px",
        lineW: "25rem",
      },
      backgroundImage: {
        headerimg: "url(./src/assets/details-2-background.jpg)",
      },
    },
  },
  plugins: [],
};
