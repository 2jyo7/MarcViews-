import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // animation: {
      //   fadeIn: "fadeIn 1.5s ease-out",
      //   slideIn: "slideIn 1.5s ease-out",
      //   pop: "pop 0.6s ease-out", // Pop effect with 0.6s duration
      // },
      // keyframes: {
      //   fadeIn: {
      //     "0%": { opacity: "0" },
      //     "100%": { opacity: "1" },
      //   },
      //   slideIn: {
      //     "0%": { opacity: "0", transform: "translateY(30px)" },
      //     "100%": { opacity: "1", transform: "translateY(0)" },
      //   },
      //   pop: {
      //     "0%": { transform: "scale(1)" },
      //     "50%": { transform: "scale(1.1)" }, // Scales up slightly
      //     "100%": { transform: "scale(1)" }, // Returns to original size
      //   },
      // },
    },
  },
  plugins: [],
} satisfies Config;
