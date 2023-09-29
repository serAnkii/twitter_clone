// tailwind.config.js


module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors:{
        twitter:"#1a8cd8"
      }
      // Other Tailwind CSS configuration...
    },
  },
  plugins: [require("tailwindcss-animate")],
};
