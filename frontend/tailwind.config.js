

module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: {
          600: "#79747e",
          900: "#112211",
          "900_01": "#1c1b1f",
          "900_9e": "#1122119e",
          "900_71": "#11221171",
          "900_87": "#11221187",
        },
        black: { 900: "#000000" },
        teal: { 200: "#8dd3bb" },
        red: { A100: "#ff8682" },
      },
      boxShadow: {},
      fontFamily: { tradegothicltextended: "TradeGothic LT Extended", montserrat: "Montserrat" },
      opacity: { 0.75: 0.75, 0.25: 0.25, 0.5: 0.5 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
