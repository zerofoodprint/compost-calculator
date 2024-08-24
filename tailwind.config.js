/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          cream: "rgb(var(--color-accent-cream) / <alpha-value>)",
          olive: "rgb(var(--color-accent-olive) / <alpha-value>)",
          red: "rgb(var(--color-accent-red) / <alpha-value>)",
          yellow: "rgb(var(--color-accent-yellow) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
