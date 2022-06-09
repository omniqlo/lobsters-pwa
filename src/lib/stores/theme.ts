import {browser} from "$app/env";
import {writable} from "svelte/store";

type Theme = "light" | "dark" | null;

const store = writable<Theme>(null);
const key = "theme";

function updateDom(theme: Theme) {
	if (
		theme === "dark" ||
		(theme === null &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
}

export function initTheme() {
	if (browser) {
		const item = localStorage.getItem(key);
		if (item === "dark" || item === "light" || item === null) {
			store.set(item);
			updateDom(item);
		}
	}
}

export const theme = {
	subscribe: store.subscribe,
	set: (theme: Theme) => {
		store.set(theme);
		if (theme) {
			localStorage.setItem(key, theme);
		} else {
			localStorage.removeItem(key);
		}
		updateDom(theme);
	},
};
