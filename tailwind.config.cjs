/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background': '#004643',
				'button': '#f9bc60',
				'headline': '#fffffe',
				'pargraph': '#abd1c6',
				'button-text': '#001e1d',
				'stroke-color': '#001e1d',
				'main': '#e8e4e6',
				'highlight': '#f9bc60',
				'secondary': "#abd1c6",
				'tertiary': '#e16162'
			}
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["emerald"]
	},
}
