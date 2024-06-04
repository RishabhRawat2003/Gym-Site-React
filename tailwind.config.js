/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      newFont: ["Caveat", 'cursive'],
      textFont: ["Playfair Display", 'serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      letterSpacing: {
        wider: '0.2em', 
        widest: '0.3em',
      }

    },
  },
  plugins: [],
}

