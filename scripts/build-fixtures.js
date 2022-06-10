import fs from "fs";
import glob from "glob";

async function buildFixtureFile(file) {
	const {buildFixture} = await import(new URL(`../${file}`, import.meta.url));
	const fixture = buildFixture();
	const idx = file.lastIndexOf("/");
	fs.writeFileSync(
		new URL(`../${file.slice(0, idx)}/fixture.json`, import.meta.url),
		JSON.stringify(fixture, null, 2),
		"utf-8",
	);
}

async function run() {
	const files = glob.sync("**/build-fixture.js");
	await Promise.all(files.map(buildFixtureFile));
	console.log("Done building fixtures");
}

run();
