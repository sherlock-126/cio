/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
      },
      colors: {
        momo: {
          pink: "#D82D8B",
          "pink-dark": "#B8246F",
          "pink-light": "#F0A0C8",
        },
        navy: {
          600: "#2A4A7F",
          700: "#1E3A6E",
          800: "#152D5B",
          900: "#1A3058",
        },
      },
    },
  },
  plugins: [],
};
