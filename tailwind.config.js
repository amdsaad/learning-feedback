/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './error.vue',
    './node_modules/flowbite/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          'DEFAULT': '1rem',
          'sm': '1rem',
          'lg': '2rem',
          'xl': '2rem',
          '2xl': '2rem',

        },
      },
      colors: {
        primary: '#5d5d5d',
      },
    },
  },
  plugins: [],
}
