/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        halo: '0 0 60px rgba(255,255,255,0.14)',
        line: 'inset 0 1px 0 rgba(255,255,255,0.10)',
      },
    },
  },
  plugins: [],
};
