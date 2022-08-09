/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      ableyellow: '#fbffa7',
      ablered: '#ff764d',
      ableblue: '#b1c5ff',
      ablepurple: '#d5b3ff',
      ablegreen: '#b6ffc0',
      abledarkblue: '#0000ff',
    },
    screens: {
      '-2xl': { max: '1439px' },
      '-xl': { max: '1279px' },
      '-lg': { max: '1023px' },
      '-md': { max: '767px' },
      '-sm': { max: '639px' },
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
}
