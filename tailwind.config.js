/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        dark: "#1C1C1C",
        darkSecondary: "#2B2B2B",
        light: "#EFEFEF",
        gray: "#424343",
        purpleD: "#BEACDA",
        purpleL: "#A191B9",
      },
      fontFamily: {
        jetbrainsMono: ["Jetbrains Mono", "monospace"],
        gochiHand: ["Gochi Hand", "cursive"],
        pixelifySans: ["Pixelify Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        homeLG: "1480px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },

  darkMode: "class",
  plugins: [],
};
