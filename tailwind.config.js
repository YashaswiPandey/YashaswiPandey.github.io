/**
 * Portfolio - (c) 2025 by Yashaswi Pandey
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
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
      rotate: {
        20: "20deg",
        "-20": "-20deg",
        "-30": "-30deg",
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
        parabola: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(15px, -12px)" },
          "100%": { transform: "translate(30px, 0)" },
        },
        shockwave: {
          "0%": { r: "0", opacity: "1" },
          "100%": { r: "15", opacity: "0" },
        },
        "arc-appear": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "height-adjust": {
          "0%, 100%": { height: "90vh" },
          "50%": { height: "80vh" },
        },
      },
      animation: {
        jitter: "jitter 0.4s ease-in-out",
        verticalJitter: "verticalJitter 0.4s ease-in-out",
        parabola: "parabola 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        shockwave: "shockwave 0.5s ease-out 0.4s forwards",
        "arc-1": "arc-appear 0.5s ease-out forwards",
        "arc-2": "arc-appear 0.5s ease-out 0.5s forwards",
        "arc-3": "arc-appear 0.5s ease-out 1s forwards",
        "height-adjust": "height-adjust 3.5s ease-in-out 3",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
