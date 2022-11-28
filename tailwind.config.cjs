/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				perspectiveTwo: "url:('/images/2point/step9-4.webp')",
				perspectiveOne: "url:('/images/2point/step8-2.webp')"
			}
		}
	},
	plugins: []
};
