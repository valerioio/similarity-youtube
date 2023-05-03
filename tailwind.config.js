import { fontFamily } from "tailwindcss/defaultTheme";
import { colors } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  container: {
    center: true,
    padding: "1.5rem",
    screens: {
      "2xl": "1360px",
    },
  },
  extend: {
    fontFamily: {
      sans: ["var(--font-inter)", ...fontFamily.sans],
    },
    colors: {
      ...colors,
      "light-ghold": "#f5bc51",
      "dark-gold": "#533519",
    },
  },
};
export const plugins = [
  require("tailwindcss-animate"),
  require("@tailwindcss/typography"),
];
