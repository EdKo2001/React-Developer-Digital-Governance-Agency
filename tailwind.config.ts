import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#6C6C6C",
        lightGray: "#CDCDCD",
        borderColor: "#E5E5E5",
        orange: "#FEAF00",
        brown: "#F2EAE1",
        blue: "#74C1ED",
        pink: "#EE95C5",
        yellow: "#F6C762",
        authShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        formShadow: "2px 5px 10px 0px rgba(0, 0, 0, 0.10)",
      },
      backgroundImage: {
        authBG: "linear-gradient(71deg, #FEAF00 19.35%, #F8D442 90.12%);",
      },
    },
  },
  plugins: [],
};

export default config;
