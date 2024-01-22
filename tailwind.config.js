/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#DCF2F1',
      'secondary': '#7FC7D9',
      'dark': '#04080F', 
      'danger': '#365486'
    })
  },
  plugins: [],
}

