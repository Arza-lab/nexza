import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Roboto Serif", "sans-serif"],
        mono: ["Roboto Mono", "sans-serif"],
        display: ["Oswald"],
        body: ["Open Sans"],
      },
    },
  },
});
