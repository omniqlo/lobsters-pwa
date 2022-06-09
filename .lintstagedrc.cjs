const {resolve} = require("path");

module.exports = {
	"*": "prettier --plugin-search-dir=. --ignore-unknown --write",
	".{js,svelte,ts}": "eslint --fix",
	"package.json": (files) =>
		files
			.map((file) => [`cd ${resolve(file, "..")}`, 'sh -c "fixpack || true"'])
			.flat(),
};
