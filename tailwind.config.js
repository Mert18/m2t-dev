/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
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
      white: "#efefef",
      white2: "#f3f3f3",
      gray: "#333333",
      primary: "var(--color-primary)",
      primarylighter: "var(--color-primary-lighter)",
      secondary: "var(--color-secondary)",
      accent: "var(--color-accent)",
      text: "var(--color-text)",
      textsecondary: "var(--color-text-secondary)",
      background: "var(--color-background)",
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"],
      backgroundOpacity: ['active']
    },
  },
};
