import fastCartesian from "fast-cartesian";

export function buildFixture() {
	return fastCartesian([
		[
			"Button",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam turpis, lacinia non varius et, sollicitudin at arcu. Nulla facilisi. Pellentesque id orci turpis.",
		],
		[true, false],
		[true, false],
	]).map(([label, stretch, highlight]) => ({label, stretch, highlight}));
}
