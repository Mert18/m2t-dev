/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // These paths are just examples, customize them to match your project structure
  purge: ["./*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
      },
      colors: {
        white: {
          100: "#FFFFFF",
          200: "#F4F4F4",
        },
        black: {
          100: "#2E2E2E",
          200: "#444E53",
        },
      },
    },
  },
  plugins: [],
};
