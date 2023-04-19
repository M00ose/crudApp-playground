/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FFD9A8",
          DEFAULT: "#FFB347",
          dark: "#C97E1F",
        },
        secondary: {
          light: "#D9E7EA",
          DEFAULT: "#a2d2d4",
          dark: "#6F8D90",
        },
        tertiary: {
          light: "#eff4ed",
          DEFAULT: "#c3d6bd",
          dark: "#30432a",
        },
        offWhite: "#F9F6F0",
        offGrey: "#CFCFCF",
        offBlack: "#2E2E2E",
        success: "#1abc9c",
        warning: "#f39c12",
        error: "#c0392b",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["EB Garamond", "serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
