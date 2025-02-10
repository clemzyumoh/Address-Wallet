/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode support
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Body text
        orbitron: ["Orbitron", "sans-serif"], // Headings
        code: ["Fira Code", "monospace"], // Code sections
      },
      colors: {
        primary: "#243978", // Deep blue
        secondary: "#0085A8", // Bright blue
        bgcolor: "#AC5635", // Warm brown
        highlight: "#FF440F", // Bright orange
        purple: "#694972", // Muted purple
        pink: "#9D5966", // Dark pink
      },
    },
  },
  plugins: [],
};
