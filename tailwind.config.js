module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlue: "#0C3373",
        customDarkBeige: "#ADA78C",
        customBeige: "#E7E5DD",
        customBlack: "#2E2E2E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
