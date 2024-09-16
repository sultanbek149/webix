/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
      xl: "1440px"
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightGrey: "hsl(0, 0%, 97%)",
        brightGreen: "hsl(145, 68%, 56%)",
        lineColor: "hsl(210, 29%, 95%)"
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
