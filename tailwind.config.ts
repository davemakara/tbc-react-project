import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      mainLightBG: "#EEEEEE",
      mainDarkBG2: "#2C3333",
      mainDarkBG: "#0a0a0a",
      darkYellow: "#ffc700",
      white: "#ffffff",
      green: "#54B435",
      green2: "#C1D0B5",
      green3: "#AAC8A7",
      purple: "#37306B",
      red: "#E64848",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    extend: {
      screens: {
        sm: "640px",
        md: "780px",
        lg: "1070px",
        xl: "1300px",
        xxl: "1600px",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        arsenal: ["var(--font-arsenal)"],
        pacifico: ["var(--font-pacifico)"],
        merienda: ["var(--font-merienda)"],
      },
    },
  },
  plugins: [],
};
export default config;
