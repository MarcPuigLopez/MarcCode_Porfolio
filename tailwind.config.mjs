/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";
const defaultTheme = require("tailwindcss/defaultTheme");

const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    	"./src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
	],
	theme: {
		extend: {
			fontFamily: {
				firaCode: ["Fira Code", ...defaultTheme.fontFamily.sans],
			},
			spacing: {
				100: "25rem",
				112: "28rem",
				120: "30rem",
				128: "32rem",
				144: "36rem",
				160: "40rem",
				176: "44rem",
			},
			colors: {
				'darkpurple': '#3D1754',
			},
			aspectRatio: {
				'5/4': '5 / 4',
			}
		},
	},
	darkMode: "class",
	plugins: [nextui(), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }