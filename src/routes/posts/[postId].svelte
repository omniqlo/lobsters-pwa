<script lang="ts">
	import {bookmarks, hiddenPosts, usersFollowing} from "$lib/stores";
	import PostDetails from "$lib/components/PostDetails/PostDetails.svelte";
	import Comment from "$lib/components/Comment/Comment.svelte";
	import Modal from "$lib/components/Modal/Modal.svelte";
	import Button from "$lib/components/Button/Button.svelte";
	import type {CommentType, PostType} from "$lib/types";

	export let post: PostType;
	export let comments: CommentType[];

	let showModal = false;

	$: isBookmarked = $bookmarks
		.map((post) => post.short_id)
		.includes(post.short_id);
	$: isHidden = $hiddenPosts
		.map((post) => post.short_id)
		.includes(post.short_id);
	$: isFollowingUser = $usersFollowing.includes(post.submitter_user.username);
</script>

<svelte:head>
	<title>{post.title} | Lobsters</title>
</svelte:head>

<PostDetails {post} on:menulaunch={() => (showModal = true)} />
{#if comments.length > 0}
	<ul>
		{#each comments as comment (comment.short_id)}
			<li>
				<Comment {comment} indent={0} />
			</li>
		{/each}
	</ul>
{/if}
{#if showModal}
	<Modal on:close={() => (showModal = false)}>
		<div class="space-y-3">
			<Button
				label="{isBookmarked ? 'Unsave' : 'Save'} Post"
				stretch={true}
				highlight={!isBookmarked}
				on:click={() => bookmarks.toggle(post)}
			/>
			<Button
				label="{isHidden ? 'Unhide' : 'Hide'} Post"
				stretch={true}
				highlight={!isHidden}
				on:click={() => hiddenPosts.toggle(post)}
			/>
			<Button
				label="{isFollowingUser ? 'Unfollow' : 'Follow'} {post.submitter_user
					.username}"
				stretch={true}
				highlight={!isFollowingUser}
				on:click={() => usersFollowing.toggle(post.submitter_user.username)}
			/>
			<Button
				label="Close"
				stretch={true}
				on:click={() => (showModal = false)}
			/>
		</div>
	</Modal>
{/if}
