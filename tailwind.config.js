const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'primary': "#DCF2F1",
      'secondary': "#7FC7D9",
      'tertiary': "#365486",
      'quaternary': "#0F1035",
      ...colors
    }
  },
  plugins: [],
}

