/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sahadva: ["Sahadeva", "serif"],
        ndot57: ["Ndot57", "sans-serif"],
        ntype82mono: ["NType82Mono", "monospace"],
        "lettera-mono": ["LetteraMonoLL", "monospace"],
      },
      fontSize: {
        "5rem": "5rem",
        "3.5rem": "3.5rem",
        "3rem": "3rem",
        "2.5rem": "2.5rem",
      },
      keyframes: {
        jitter: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(-5deg)" },
          "75%": { transform: "rotate(3deg)" },
        },
        verticalJitter: {
          "0%, 100%": { transform: "rotate(90deg)" },
          "25%": { transform: "rotate(95deg)" },
          "50%": { transform: "rotate(85deg)" },
          "75%": { transform: "rotate(93deg)" },
        },
      },
      animation: {
        jitter: "jitter 0.4s ease-in-out",
        verticalJitter: "verticalJitter 0.4s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
