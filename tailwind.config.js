module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/src/img/landing.jpg')",
      },
      fontFamily: {
        rubik: ['"Rubik"', "sans-serif"],
      },
      colors: {
        def: "#f3e2ef",
      },
    },
  },
  plugins: [],
};
