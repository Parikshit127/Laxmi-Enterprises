/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': {
          DEFAULT: '#0284c7', // sky-600
          'light': '#03a9f4', // light-blue-500
          'dark': '#0c4a6e',  // sky-900
        },
        'brand-secondary': {
          DEFAULT: '#f97316', // orange-500
          'light': '#fb923c', // orange-400
          'dark': '#c2410c',  // orange-700
        },
        'brand-gray': {
          'light': '#f8fafc', // slate-50
          DEFAULT: '#64748b', // slate-500
          'dark': '#1e293b',  // slate-800
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
