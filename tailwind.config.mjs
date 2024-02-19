/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			spacing: {
				'100': '25rem',
				'112': '28rem',
				'120': '30rem',
				'128': '32rem',
				'144': '36rem',
				'160': '40rem',
				'176': '44rem',
			}
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
