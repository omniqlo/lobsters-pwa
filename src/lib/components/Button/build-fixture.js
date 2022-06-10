import fastCartesian from "fast-cartesian";

export function buildFixture() {
	return fastCartesian([["Button"], [true, false], [true, false]]).map(
		([label, stretch, highlight]) => ({label, stretch, highlight}),
	);
}
