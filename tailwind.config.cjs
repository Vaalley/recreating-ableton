/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

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
			abledarkblue: '#0000ff'
		},
		screens: {
			'-2xl': { max: '1439px' },
			'-xl': { max: '1279px' },
			'-lg': { max: '1023px' },
			'-md': { max: '767px' },
			'-sm': { max: '639px' }
		},
		fontFamily: {
			lato: ['Lato', 'sans-serif']
		}
	},
	plugins: [
		require('daisyui'),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.shadow-2px': {
					'-webkit-box-shadow': '0px 2px 0px 0px #000000',
					'box-shadow': '0px 2px 0px 0px #000000'
				}
			});
		})
	]
};
