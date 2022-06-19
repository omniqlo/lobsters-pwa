import fastCartesian from "fast-cartesian";

const date = new Date("1995-12-17T03:24:00Z");

export function buildFixture() {
	return fastCartesian([
		[true, false],
		[true, false],
		["https://i.pravatar.cc/100?img=1", ""],
		["username"],
		[new Date(date.getDate() - 1).toISOString(), date.toISOString()],
		[10],
		[10],
		[[], ["tag"]],
	]).map(
		([
			hasParent,
			canBeHidden,
			avatarUrl,
			username,
			createdAt,
			score,
			numOfComments,
			tags,
		]) => ({
			hasParent,
			canBeHidden,
			avatarUrl,
			username,
			createdAt,
			score,
			numOfComments,
			tags,
		}),
	);
}
