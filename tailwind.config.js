// tailwind.config.js

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      gridTemplateRows: {
        '8': "1fr 3fr 2fr",
      },

      colors: {
        twitter: "#1a8cd8",
      },

      // Other Tailwind CSS configuration...
    },
  },
  plugins: [require("tailwindcss-animate")],
};
