const starlightPlugin = require('@astrojs/starlight-tailwind');

// Generated color palettes
const accent = { 200: '#a9caff', 600: '#0060e5', 900: '#002c72', 950: '#06214e' };
const gray = { 100: '#f5f6fa', 200: '#eaedf6', 300: '#bec2cc', 400: '#848b9e', 500: '#515869', 700: '#323848', 800: '#212636', 900: '#15181f' };

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};