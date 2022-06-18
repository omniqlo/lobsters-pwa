import fromNow from "fromnow";
import type {DateOkay} from "fromnow";
import type {PostType} from "$lib/types";

export const formatDate = (date: DateOkay) =>
	fromNow(date, {max: 1, suffix: true});

// Handles duplicate posts
export function mergePosts(oldPosts: PostType[], newPosts: PostType[]) {
	const posts = [...oldPosts];
	const postIds = new Set(oldPosts.map((post) => post.short_id));

	for (const newPost of newPosts) {
		if (!postIds.has(newPost.short_id)) {
			posts.push(newPost);
			postIds.add(newPost.short_id);
		}
	}

	return posts;
}

export function filterPosts(posts: PostType[], hiddenPosts: PostType[]) {
	const hiddenPostIds = new Set(hiddenPosts.map((post) => post.short_id));
	return posts.filter((post) => !hiddenPostIds.has(post.short_id));
}
