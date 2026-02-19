/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#e9afa3", // Salmon
        secondary: "#f9dec9", // Peach
        tertiary: "#c7cbda", // Periwinkle
        neutral: "#e7d8d2", // Warm Gray
        "dark-accent": "#685044", // Dark Brown
        "background-light": "#FAFAFA",
        "background-dark": "#1F1F1F",
        "card-light": "#FFFFFF",
        "card-dark": "#2D2D2D",
        "text-light": "#685044",
        "text-dark": "#E7D8D2",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        'xl': '1.5rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
}