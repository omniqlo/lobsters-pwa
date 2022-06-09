<script lang="ts">
	import {usersFollowing} from "$lib/stores";
	import Comment from "$lib/components/Comment.svelte";
	import ListItem from "$lib/components/ListItem.svelte";
	import Modal from "$lib/components/Modal.svelte";
	import Button from "$lib/components/Button.svelte";
	import type {CommentType} from "$lib/types";

	export let comment: CommentType;
	export let indent: number;

	let showModal = false;

	$: hasNestedComments = comment.comments.length > 0;
	$: hasParent = indent > 0;
	$: isFollowingUser = $usersFollowing.includes(
		comment.commenting_user.username,
	);
</script>

<ListItem
	{hasParent}
	canBeHidden={hasNestedComments}
	avatarUrl={comment.commenting_user.avatar_url}
	username={comment.commenting_user.username}
	createdAt={comment.created_at}
	score={comment.score}
	numOfComments={comment.comments.length}
	handleMenuDots={() => (showModal = true)}
>
	<div class="comment text-sm">{@html comment.comment}</div>
</ListItem>
{#if hasNestedComments}
	<ul>
		{#each comment.comments as nestedComment (nestedComment.short_id)}
			<li
				class:border-b={nestedComment.comments.length === 0}
				class:border-color={nestedComment.comments.length === 0}
			>
				<Comment comment={nestedComment} indent={indent + 1} />
			</li>
		{/each}
	</ul>
{/if}
{#if showModal}
	<Modal handleClose={() => (showModal = false)}>
		<div class="space-y-3">
			<Button
				text="{isFollowingUser ? 'Unfollow' : 'Follow'} {comment.commenting_user
					.username}"
				handleClick={() =>
					usersFollowing.toggle(comment.commenting_user.username)}
				stretch={true}
				highlight={!isFollowingUser}
			/>
			<Button
				text="Close"
				handleClick={() => (showModal = false)}
				stretch={true}
			/>
		</div>
	</Modal>
{/if}
