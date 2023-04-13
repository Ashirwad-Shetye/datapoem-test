/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik, sans-serif",
      },
      backgroundColor: {
        mainBg: "#f5f6fa",
        accentBlue: "#5358b6",
        btnGray: "#68727e",
        btnRed: "#ec6469",
      },
      colors: {
        accentBlue: "#5358b6",
        accentRed: "#ec6469",
        titleGray: "#2c3545",
        textGray: "#717578",
      },
      borderColor: {
        accentBlue: "#5358b6",
      },
    },
  },
  plugins: [],
};
