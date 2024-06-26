/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.vue"],
  theme: {
    extend: {},
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      white: "#ffffff",
      black: "#1D1D1D",
      ocean: {
        DEFAULT: "#3B9B91",
        100: "#DFF4F3",
        200: "#B8DEDA",
        300: "#6CB4AD",
        400: "#3B9B91",
        500: "#0A8276",
        600: "#08665C",
        700: "#06534B",
      },
      engineering: {
        DEFAULT: "#8D8786",
        100: "#F7F7F7",
        200: "#EEEDED",
        300: "#BFBBBB",
        400: "#8D8786",
        500: "#575352",
        600: "#3C3A39",
      },
      error: {
        DEFAULT: "#ef4444",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b"
      }
    },
  },
  plugins: [],
};
