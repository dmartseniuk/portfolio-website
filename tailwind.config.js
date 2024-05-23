/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      gray: "#C0C0C0",
      "light-grey": "#EBEBEB",
      "bright-orange": "#FF6700",
      blue: "#004E98",
      "light-blue": "#3A6EA5",
    },
    extend: {
      textColor: {
        gray: "#C0C0C0",
        "light-grey": "#EBEBEB",
        "bright-orange": "#FF6700",
        blue: "#004E98",
        "light-blue": "#3A6EA5",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        "hind-madurai": ["Hind Madurai"],
      },
      backgroundImage: {
        home: "url('./assets/home-bg.png')",
      },
      dropShadow: {
        button: "0 0 5px rgba(255, 103, 0, 0.60)",
      },
      boxShadow: {
        skills: "0 0 40px 0 rgba(255, 103, 0, 1)",
      },
    },
  },
  plugins: [],
};
