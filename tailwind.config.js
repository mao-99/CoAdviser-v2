/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#DAE3E5',
      'secondary': '#507DBC',
      'dark': '#04080F', 
      'danger': '#FF6640'
    })
  },
  plugins: [],
}

