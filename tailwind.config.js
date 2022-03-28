module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1777f2",
        "custom-green": "#25D366",
        "custom-pink": "#e31b6d",
        "custom-gray": "#f7f7f7",
        "custom-white": "#fbfbfb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
