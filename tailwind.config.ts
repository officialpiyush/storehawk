import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["var(--font-lobster)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
