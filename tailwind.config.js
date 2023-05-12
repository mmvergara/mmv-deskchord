/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#242424",
        sideNav: "#1f1f1f",
        bluePri: "#07617D",
      },
    },
  },
  plugins: [],
};
