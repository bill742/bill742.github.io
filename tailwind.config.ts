import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        lg: "976px",
        md: "768px",
        sm: "480px",
        xl: "1440px",
      },
      fontFamily: {
        // Space Grotesk as the default sans stack
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        // Keep a mono stack for 8-bit theme
        mono: ['"Press Start 2P"', "VT323", "ui-monospace", "monospace"],
      },
    },
  },
} satisfies Config;
