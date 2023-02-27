/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
  ],
  theme: {
    theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px"
      },
      fontSize: {
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        "13": "13px",
        "17": "17px",
        '0.97': '0.97rem',
      },
      width: {
        "415": "415px",
        "425": "425px",
        '440': '440px',
      },
    },
    extend: {
      animation: {
        blob: "blob 5s infinite",
        tilt: "tilt 5s infinite linear"
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(3deg)",
          },
          "75%": {
            transform: "rotate(-3deg)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.85)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        }
      },
      colors: {
        darkBlack: "rgba(0, 0, 0, 0.95)",
        lightBlack: "rgba(0,0,0, 0.8)",
        saturatedBlack: "rgb(33, 18, 18)",
        red1984: "rgba(212,36,41,255)",
        darkRed: "#801336",
        textColor: "rgba(252,252,252,255)",
        darkGreen: "#02383C",
        thirdColor: "rgba(255, 0, 0, 0.6)",
        veryLighCyan: "#EBFFFB",
        veryLightBrown: "#FEE9D7",
        youtube: "#FF0000",
        instagram: "#C13584",
        facebook: "#4267B2",
        spotify: "#1DB954",
        gmail: "#c71610",
      }
    },
  },
  plugins: [],
}
