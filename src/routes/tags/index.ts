import type {RequestHandler} from "@sveltejs/kit";
import * as api from "$lib/api";

export const get: RequestHandler = async () => {
	try {
		const tags = await api.get("/tags.json");

		return {
			body: {tags},
		};
	} catch (err) {
		return {
			status: 500,
		};
	}
};
