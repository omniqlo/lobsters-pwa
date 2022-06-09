import type {RequestHandler} from "@sveltejs/kit";
import * as api from "$lib/api";

export const get: RequestHandler<{list: string; page: string}> = async ({
	params,
}) => {
	try {
		const {list, page} = params;

		const path =
			list === "frontpage"
				? `/page/${page}.json`
				: list === "active" || list === "newest"
				? `/${list}/page/${page}.json`
				: `/t/${list}.json?page=${page}`;

		const posts = await api.get(path);

		return {body: {posts}};
	} catch (err) {
		return {
			status: 500,
		};
	}
};
