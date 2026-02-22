/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        aduanex: {
          navy: '#1A1C2E',
          green: '#3B6334',
        },
      },
    },
  },
  plugins: [],
}
