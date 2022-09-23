/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#15202B",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: "#1D9BF0",
      blueDarker: "#1a8cd8",
      grey:"#37444D",
      greyDarker:"#1E2732",
      greyLighter:"#8B98A5",
      sky:"#0ea5e9",
      skyDarker:"#0c4a6e",
      teal:"#14b8a6",
      tealDarker:"#134e4a",
      red:"#ef4444",
      tahiti: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
      // ...
    },
  },
  plugins: [],
};
