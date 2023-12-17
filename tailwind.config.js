/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        fourth:"#56ccf2",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        'tablet':'769px',
        'small':"324px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "seva-pattern":"url('/src/assets/blue-black.png')",
        "seva-pattern1":"url('/src/assets/SevaBack.png')",
      },
    },
  },
  plugins: [],
};