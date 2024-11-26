/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BADFF2",
        secondary: "#0697E1",
        yellow: "#FFDD00",
      },
      fontFamily: {
        sigmar: ["Sigmar One"],
        short: ["Short Stack"],
      },
    },
  },
  plugins: [],
};
