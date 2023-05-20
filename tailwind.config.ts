import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", ...fontFamily.sans],
        sans: ["Work Sans", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
