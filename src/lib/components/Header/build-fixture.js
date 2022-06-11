import fastCartesian from "fast-cartesian";

export function buildFixture() {
	return fastCartesian([
		[true, false],
		[
			"Title",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam turpis, lacinia non varius et, sollicitudin at arcu. Nulla facilisi.",
		],
		["https://storybook.js.org/", undefined],
		[true, false],
	]).map(([hasChildren, title, link, showBorder]) => ({
		hasChildren,
		title,
		link,
		showBorder,
	}));
}
