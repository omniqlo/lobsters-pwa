import type {RequestHandler} from "@sveltejs/kit";
import * as api from "$lib/api";
import type {CommentType} from "$lib/types";

function formatComments(
	comments: Omit<CommentType, "comments">[],
	indentLevel: number,
): CommentType[] {
	if (comments.length < 1) {
		return [];
	}

	const formattedComments: CommentType[] = [];

	for (let i = 0; i < comments.length; i++) {
		const comment = comments[i];
		if (comment.indent_level === indentLevel) {
			const idxOfNextCommentWithSameIndentLevel = comments
				.slice(i + 1)
				.findIndex((c) => c.indent_level === indentLevel);

			formattedComments.push({
				...comment,
				comments: formatComments(
					comments.slice(
						i + 1,
						idxOfNextCommentWithSameIndentLevel === -1
							? comments.length
							: idxOfNextCommentWithSameIndentLevel + i + 1,
					),
					indentLevel + 1,
				),
			});
		}
	}

	return formattedComments;
}

export const get: RequestHandler<{postId: string}> = async ({params}) => {
	try {
		const {postId} = params;

		const {comments, ...post} = await api.get(`/s/${postId}.json`);

		return {
			body: {
				post,
				comments: formatComments(comments, 1),
			},
		};
	} catch (err) {
		return {
			status: 500,
		};
	}
};
