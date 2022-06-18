import * as utils from "../utils";
import type {PostType} from "../types";

describe("mergePosts", () => {
	it("should merge two lists of posts into one", () => {
		expect(
			utils.mergePosts(
				[{short_id: "1"}, {short_id: "2"}] as PostType[],
				[{short_id: "3"}] as PostType[],
			),
		).toEqual([{short_id: "1"}, {short_id: "2"}, {short_id: "3"}]);
	});

	it("should remove duplicates in merged list of posts", () => {
		expect(
			utils.mergePosts(
				[{short_id: "1"}, {short_id: "2"}] as PostType[],
				[{short_id: "1"}] as PostType[],
			),
		).toEqual([{short_id: "1"}, {short_id: "2"}]);
	});
});

describe("filterPosts", () => {
	it("should filter out hidden posts", () => {
		expect(
			utils.filterPosts(
				[{short_id: "1"}, {short_id: "2"}] as PostType[],
				[{short_id: "1"}] as PostType[],
			),
		).toEqual([{short_id: "2"}]);
	});
});
