import {get} from "svelte/store";
import * as stores from "./stores";
import type {PostType, TagType, UserType} from "./types";

export function storeBackup(backup: any) {
	try {
		const bookmarks = backup.bookmarks as PostType[];
		stores.bookmarks.importBackup(bookmarks);

		const hiddenPosts = backup.hiddenPosts as PostType[];
		stores.hiddenPosts.importBackup(hiddenPosts);

		const tagsFollowing = backup.tagsFollowing as TagType["tag"][];
		stores.tagsFollowing.importBackup(tagsFollowing);

		const usersFollowing = backup.usersFollowing as UserType["username"][];
		stores.usersFollowing.importBackup(usersFollowing);

		stores.toast.set({msg: "Successfully imported backup"});
	} catch (err) {
		stores.toast.set({msg: "Error importing backup", type: "error"});
	}
}

export function exportBackup() {
	try {
		const backup = {
			bookmarks: get(stores.bookmarks),
			hiddenPosts: get(stores.hiddenPosts),
			tagsFollowing: get(stores.tagsFollowing),
			usersFollowing: get(stores.usersFollowing),
		};

		const backupUri =
			"data:application/json;charset=utf-8," +
			encodeURIComponent(JSON.stringify(backup, null, 2));

		const anchorEl = document.createElement("a");
		anchorEl.setAttribute("href", backupUri);
		anchorEl.setAttribute("download", "backup.json");
		anchorEl.click();
	} catch (err) {
		stores.toast.set({msg: "Error exporting backup", type: "error"});
	}
}
