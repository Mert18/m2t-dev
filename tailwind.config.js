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
      dark: "#01353C",
      light: "#E5E3D2",
      lighter: "#eeede4",
      accent1: "#B64326",
      accent2: "#00BACF"
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
