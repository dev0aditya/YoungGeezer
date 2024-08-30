/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "2100px",
      },
      colors: {
        "color-primary": "#f5f5dc",
        "color-subPrimary": "#d2b48c",
        "color-secondary": "#006d5b",
      },
      fontFamily: {
        primaryFont: ["Inter", "sans-serif"],
        secondaryFont: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
