/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				perspective: "url:('/images/perspective/2point/step9-4.webp')"
			}
		}
	},
	plugins: []
};
