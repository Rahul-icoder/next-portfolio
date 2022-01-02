module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-blue": "#1777f2",
        "custom-green": "#25D366",
        "custom-red": "rgb(200, 2, 2)",
        "custom-gray": "#f7f7f7",
        "custom-white": "#fbfbfb",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
