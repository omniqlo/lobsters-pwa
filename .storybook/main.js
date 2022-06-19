const path = require("path");
const glob = require("glob");
const sveltePreprocess = require("svelte-preprocess");

const rootPath = path.resolve(__dirname, "..");
const findStories = () =>
	glob.sync(`${rootPath}/src/**/*.stories.svelte`, {
		ignore: `${rootPath}/src/**/loki.stories.svelte`,
	});

module.exports = {
	stories: async (list) => [...list, ...findStories()],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
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
		// preprocess: require("../svelte.config.js").preprocess,
		preprocess: sveltePreprocess({
			postcss: true,
		}),
	},
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			$lib: path.resolve(__dirname, "../src/lib"),
		};
		return config;
	},
};
