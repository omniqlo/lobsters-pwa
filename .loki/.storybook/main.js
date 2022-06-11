const path = require("path");
const sveltePreprocess = require("svelte-preprocess");

module.exports = {
	stories: ["../../src/**/loki.stories.svelte"],
	addons: [
		"@storybook/addon-svelte-csf",
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss"),
				},
			},
		},
	],
	core: {
		disableTelemetry: true,
	},
	framework: "@storybook/svelte",
	svelteOptions: {
		// preprocess: require("../../svelte.config.js").preprocess,
		preprocess: sveltePreprocess({
			postcss: true,
		}),
	},
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			$lib: path.resolve(__dirname, "../../src/lib"),
		};
		return config;
	},
};
