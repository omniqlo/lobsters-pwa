import type {PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
	testDir: "e2e-tests",
	webServer: {
		command: "npm run build && npm run preview -- -p 4000",
		port: 4000,
	},
};

export default config;
