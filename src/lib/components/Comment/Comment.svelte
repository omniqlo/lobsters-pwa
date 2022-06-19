<script lang="ts">
	import {usersFollowing} from "$lib/stores";
	import Comment from "$lib/components/Comment/Comment.svelte";
	import ListItem from "$lib/components/ListItem/ListItem.svelte";
	import Modal from "$lib/components/Modal/Modal.svelte";
	import Button from "$lib/components/Button/Button.svelte";
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
	avatarUrl="https://lobste.rs{comment.commenting_user.avatar_url}"
	username={comment.commenting_user.username}
	createdAt={comment.created_at}
	score={comment.score}
	numOfComments={comment.comments.length}
	on:menulaunch={() => (showModal = true)}
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
	<Modal on:close={() => (showModal = false)}>
		<div class="space-y-3">
			<Button
				label="{isFollowingUser ? 'Unfollow' : 'Follow'} {comment
					.commenting_user.username}"
				stretch={true}
				highlight={!isFollowingUser}
				on:click={() => usersFollowing.toggle(comment.commenting_user.username)}
			/>
			<Button
				label="Close"
				stretch={true}
				on:click={() => (showModal = false)}
			/>
		</div>
	</Modal>
{/if}
