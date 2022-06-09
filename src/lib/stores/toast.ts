import {writable} from "svelte/store";
import type {ToastType} from "../types";

const store = writable<ToastType | null>(null);
const duration = 2000; // ms

export const toast = {
	subscribe: store.subscribe,
	set: ({msg, type}: {msg: ToastType["msg"]; type?: ToastType["type"]}) => {
		store.set({msg, type: type || "info"});
		setTimeout(() => {
			store.set(null);
		}, duration);
	},
};
