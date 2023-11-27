/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {backgroundImage: {
      'ba-gr': "url('/src/components/BG.jpg')",
    }},
  },
  plugins: [],
}

