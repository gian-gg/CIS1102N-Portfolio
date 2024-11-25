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
      },
    },
  },

  plugins: [],
};
