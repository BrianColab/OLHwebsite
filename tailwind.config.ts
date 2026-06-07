import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olh: {
          red: "#CF1F2A",
          "red-hover": "#A91520",
          "red-tint": "#FFF1F2",
          "text-primary": "#080808",
          "text-secondary": "#444444",
          "bg-light": "#F7F7F7",
          border: "#E5E5E5",
        },
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
