/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        libre: ['Ubuntu Mono'],
      },
    },
    backgroundImage: {
      back: "url('../../public/back.jpg')",
    },
  },
  plugins: [],
}
