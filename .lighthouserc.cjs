const port = 1234;
// prettier-ignore
const paths = [
	"/",
	"/posts/lsumm4",
	"/tags",
	"/tags/web",
	"/users/jcs",
];

// https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md
module.exports = {
	ci: {
		collect: {
			// An array of URLs that you'd like Lighthouse CI to collect results from
			url: paths.map((path) => `http://localhost:${port}${path}`),

			// The shell command to start the project's webserver. LH will automatically shut it down once collection is complete.
			startServerCommand: `pnpm preview -- -p ${port}`,

			// Lighthouse CLI flags: https://github.com/GoogleChrome/lighthouse/#cli-options
			settings: {
				onlyCategories: [
					"accessibility",
					"best-practices",
					"performance",
					"pwa",
					// "seo",
				],
			},

			// The number of times to collect Lighthouse results on each URL
			numberOfRuns: 1,
		},
		assert: {
			preset: "lighthouse:recommended",
		},
	},
};
