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
      dark: "#271E0D",
      light: "#E2DCD1",
      greenl: "#8ABF59",
      greend: "#6A8C45",
      white: "#efefef"
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
