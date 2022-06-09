import {browser} from "$app/env";
import {get, writable} from "svelte/store";
import type {PostType, TagType, UserType} from "../types";

function createCustomStore<T>(
	key: string,
	removeCb: (itemToRemove: T) => (items: T[]) => T[],
) {
	const store = writable<T[]>([]);

	if (browser) {
		const item = localStorage.getItem(key);
		if (item) {
			store.set(JSON.parse(item));
		}
	}

	function updateLocalStorage() {
		if (browser) {
			localStorage.setItem(key, JSON.stringify(get(store)));
		}
	}

	return {
		subscribe: store.subscribe,
		importBackup: (items: T[]) => {
			store.set(items);
			updateLocalStorage();
		},
		toggle: (item: T) => {
			if (!get(store).includes(item)) {
				// Add item
				store.update((items) => [...items, item]);
			} else {
				// Remove item
				store.update(removeCb(item));
			}
			updateLocalStorage();
		},
	};
}

export const bookmarks = createCustomStore<PostType>(
	"bookmarks",
	(post) => (xs) => xs.filter((x) => x.short_id !== post.short_id),
);

export const hiddenPosts = createCustomStore<PostType>(
	"hidden-posts",
	(post) => (xs) => xs.filter((x) => x.short_id !== post.short_id),
);

export const tagsFollowing = createCustomStore<TagType["tag"]>(
	"tags-following",
	(tag) => (xs) => xs.filter((x) => x !== tag),
);

export const usersFollowing = createCustomStore<UserType["username"]>(
	"users-following",
	(username) => (xs) => xs.filter((x) => x !== username),
);
