import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#ffffff",
        hero: "#ffcee3",
      },
      fontFamily: {
        poppins:["Poppins", "sans-serif"]
      },
    },
    screens:{
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1080px",
      xl: "1700px",
    }
  },
  plugins: [],
};
export default config;
