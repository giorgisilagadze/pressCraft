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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        button:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      },
    },
    screens: {
      md: { min: "375px" },
      md500: { min: "500px" },
      md600: { min: "600px" },
      sm: { min: "768px" },
      lg: { min: "1024px" },
      lg1110: { min: "1110px" },
      lg1250: { min: "1250px" },
      lg1350: { min: "1350px" },
      xl: { min: "1440px" },
      xl1550: { min: "1550px" },
      xl1600: { min: "1600px" },
      xl1740: { min: "1740px" },
      xxl: { min: "1920px" },
    },
  },
  plugins: [],
};
export default config;
