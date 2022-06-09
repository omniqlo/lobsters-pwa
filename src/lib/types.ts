export type UserType = {
	about: string;
	avatar_url: string;
	created_at: string;
	github_username?: string;
	invited_by_user: string;
	is_admin: boolean;
	is_moderator: boolean;
	karma: number;
	twitter_username?: string;
	username: string;
};

export type PostType = {
	comment_count: number;
	comments_url: string;
	created_at: string;
	description: string;
	flags: number;
	score: number;
	short_id: string;
	short_id_url: string;
	submitter_user: UserType;
	tags: string[];
	title: string;
	url: string;
};

export type CommentType = {
	comment: string;
	commenting_user: UserType;
	comments: CommentType[];
	created_at: string;
	flags: number;
	indent_level: number;
	is_deleted: boolean;
	is_moderated: boolean;
	score: number;
	short_id_url: string;
	short_id: string;
	updated_at: string;
	url: string;
};

export type TagType = {
	tag: string;
	description: string;
};

export type ToastType = {
	msg: string;
	type: "info" | "error";
};
