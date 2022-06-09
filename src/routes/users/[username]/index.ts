import type {RequestHandler} from "@sveltejs/kit";
import * as api from "$lib/api";

export const get: RequestHandler<{username: string}> = async ({params}) => {
	try {
		const {username} = params;

		const [user, firstPagePosts] = await Promise.all([
			api.get(`/u/${username}.json`),
			api.get(`/newest/${username}/page/1.json`),
		]);

		return {
			body: {user, firstPagePosts},
		};
	} catch (err) {
		return {
			status: 500,
		};
	}
};
