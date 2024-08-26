import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
export default config;
