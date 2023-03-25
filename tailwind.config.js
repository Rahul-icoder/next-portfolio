module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#e31b6d",
        "custom-gray": "#f7f7f7",
        "custom-black": "#262f38",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
