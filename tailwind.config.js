/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        firstColor: "rgba(0,0,0,0.95)",
        secondColor: "rgba(256, 256, 256, 0.95)",
        thirdColor: "rgba(255, 0, 0, 0.6)",
      }
    },
  },
  plugins: [],
}
