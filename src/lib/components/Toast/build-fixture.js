import fastCartesian from "fast-cartesian";

export function buildFixture() {
	return fastCartesian([
		[
			"Message",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam turpis, lacinia non varius et, sollicitudin at arcu. Nulla facilisi. Pellentesque id orci turpis. Mauris interdum faucibus magna quis maximus. Duis commodo tincidunt luctus. In facilisis consectetur lorem, eu ornare dolor malesuada et. Donec mattis purus at elit porttitor maximus. Aliquam a purus nunc.",
		],
		["info", "error"],
	]).map(([msg, type]) => ({msg, type}));
}
