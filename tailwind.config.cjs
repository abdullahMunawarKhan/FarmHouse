// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#101713',      // Near‑black forest
        bgSecondary: '#18221C',   // Deep charcoal green
        accent: '#D8C19A',        // Champagne gold
        textPrimary: '#F5F0E7',   // Warm ivory
        textSecondary: '#B9C2B8', // Muted sage‑gray
        border: '#3A493E',        // Low‑contrast sage
        lightSection: '#E8E1D5',  // Warm stone
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        'section-y': '8rem',
      },
    },
  },
  plugins: [],
};
