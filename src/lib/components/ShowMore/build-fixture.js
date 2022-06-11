import fastCartesian from "fast-cartesian";

export function buildFixture() {
	return fastCartesian([
		[true, false],
		[true, false],
	]).map(([show, loading]) => ({show, loading}));
}
