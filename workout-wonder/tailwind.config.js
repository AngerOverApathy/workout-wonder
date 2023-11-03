/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCC",
        "gray-500": "#5E00070",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132"
      },
      backgroundColor:(theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        "dmsans": ["DM Sans", "sans-serif"],
        "montserrat": ["Montserrat", "serif"]
      },
      content: {
        evolvetext: "url('./assetsEvolveText.png')",
        abstractwaves: "url('./AbstractWaves.png')",
        sparkles: "url('./Sparkles.png')",
        circles: "url('./Circles.png')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}