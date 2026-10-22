/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07090e',
          900: '#0b0f17',
          850: '#101622',
          800: '#151d2d',
          750: '#1b2438',
          700: '#232f48',
          600: '#334155',
        },
        brand: {
          blue: {
            light: '#60a5fa',
            DEFAULT: '#3b82f6',
            dark: '#1d4ed8',
          },
          violet: {
            light: '#a78bfa',
            DEFAULT: '#8b5cf6',
            dark: '#6d28d9',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
