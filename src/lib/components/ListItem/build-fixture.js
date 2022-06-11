import fastCartesian from "fast-cartesian";

const now = new Date();

export function buildFixture() {
	return fastCartesian([
		[true, false],
		[true, false],
		["https://i.pravatar.cc/100?img=1", ""],
		["username"],
		[new Date(now.getDate() - 1).toISOString(), now.toISOString()],
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
