const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        rubik: ["Rubik", "ui-sans-serif", "system-ui"]
      },
      colors:{
        primary: {
          DEFAULT: "#8bac3e",
          "50": "#10510310a",
          "100": "#F9FFF7",
          "200": "#dee9c3",
          "300": "#c3d892",
          "400": "#aac865",
          "500": "#8bac3e",
          "600": "#708b32",
          "700": "#556926",
          "800": "#3a471a",
          "900": "#1e250e"
        },
        textprimary:{
          DEFAULT:"#757575",
          "500": "#333333"
        },
        category:{
          DEFAULT:"#E6F3F5",
          "Pizza": "#E6F3F5",
          "Cupcake": "#F0FEEB",
          "Salmon": "#F9EEF3",
          "Kebab": "#EAEEFA",
          "Doughnut": "#F3F7D9"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/images/Hero.png)",
          "background-size": "contain",
          "background-position": "top",
          "background-repeat": "no-repeat"
        },
        ".card__trending-hover": {
          "background-image": "url(/images/Hero.png)",
          "background-size": "cover"
        },
        ".card__category-hover": {
          "background-image": "url(/images/Hero.png)",
          "background-size": "cover"
        }
      };

      addUtilities(utilities);
    })
  ],
}
