/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#20FFD6',
        'primary-dark': '#0D6151',
        'secondary': '#FF8360',
        'secondary-dark': '#613225',
        'dark': '#021815',
        'dark-75': '#415250',
        'dark-65': '#5B6967',
        'grey': '#808C8A',
        'white-35': '#A6AEAD',
        'white-25': '#C0C5C4',
        'white': '#F2F3F3',
      },
    },
  },
  plugins: [],
}
