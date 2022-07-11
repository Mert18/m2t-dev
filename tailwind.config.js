/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // These paths are just examples, customize them to match your project structure
  purge: ["./*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: {
          100: "#FFFFFF",
          200: "#F4F4F4",
        },
        black: {
          100: "#2E2E2E",
          200: "#444E53",
        },
        blue: {
          50: "#E5EFF9",
          100: "#C6DEF1",
          200: "#93C3E6",
          300: "#93C3E6",
          400: "#59A4D7",
          500: "#3489C3",
          600: "#23699F",
          700: "#1E5786",
          800: "#1D4A6F",
          900: "#1D3F5D",
        },
      },
    },
  },
  plugins: [],
};
