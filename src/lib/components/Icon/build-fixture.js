import fastCartesian from "fast-cartesian";

const iconNames = [
	"arrowRight",
	"bell",
	"bookmark",
	"comment",
	"following",
	"home",
	"label",
	"menuDots",
	"search",
	"settings",
	"share",
	"thumbsUp",
];

export function buildFixture() {
	return fastCartesian([iconNames, [10, 16, 20]]).map(([name, size]) => ({
		name,
		width: size,
		height: size,
	}));
}
