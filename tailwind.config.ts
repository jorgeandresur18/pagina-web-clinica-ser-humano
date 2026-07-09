import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#ff6b12",
          salmon: "#e96854",
          human: "#ffa48a",
          calm: "#7a9b90",
          base: "#ebece8",
          "gray-dark": "#616569",
          "gray-light": "#c6c8c8",
        },
        ser: {
          orange: "#ff6b12",
          gray: "#606265",
          "gray-light": "#d0d1d1",
        },
        nadia: {
          blue:  "#556497",
          mauve: "#9483a4",
          rose:  "#e2b1ab",
          gray:  "#606265",
        },
        neuroni: {
          dark:  "#4f5571",
          blue:  "#566597",
          light: "#d0d1d1",
          gray:  "#606265",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};
export default config;
