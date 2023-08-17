/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#F9F8F8",
      white_100: "#F1F1F1",
      black: "#272838",
      serendipity: "#EB9486",
      enigma: "#F3DE8A",
      radiance: "#7E7F9A",
      border: "#c9c9c9",
      green: "#3EDD64",
    },
  },
  plugins: [],
};
