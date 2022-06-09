import type {RequestHandler} from "@sveltejs/kit";
import * as api from "$lib/api";

export const get: RequestHandler<{username: string; page: string}> = async ({
	params,
}) => {
	try {
		const {username, page} = params;

		const posts = await api.get(`/newest/${username}/page/${page}.json`);

		return {body: {posts}};
	} catch (err) {
		return {
			status: 500,
		};
	}
};
