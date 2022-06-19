import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
	}),

	kit: {
		adapter: adapter({
			edge: false,
		}),
		vite: {
			test: {
				include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
				globals: true,
				environment: "jsdom",
				setupFiles: "src/setupTests.ts",
			},
		},
	},
};

export default config;
