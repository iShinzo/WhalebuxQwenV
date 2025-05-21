/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        matrix: ['"Share Tech Mono"', 'monospace'],
      },
      colors: {
        matrixGreen: '#00FF00',
        matrixBlack: '#0A0A0A',
        matrixWhite: '#FFFFFF',
      },
    },
  },
  plugins: [],
}