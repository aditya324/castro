/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'blue': '#0060B8',
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}