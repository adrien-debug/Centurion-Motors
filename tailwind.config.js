/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        silver: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0d1117',
        },
        luxury: {
          gold: '#d4af37',
          dark: '#0a0a0a',
          black: '#000000',
        }
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
      },
    },
  },
  plugins: [],
}

