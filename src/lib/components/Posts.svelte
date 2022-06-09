<script lang="ts">
	import {bookmarks, hiddenPosts, usersFollowing} from "$lib/stores";
	import ListItem from "$lib/components/ListItem.svelte";
	import Modal from "$lib/components/Modal.svelte";
	import Button from "$lib/components/Button.svelte";
	import type {PostType} from "$lib/types";

	export let posts: PostType[];

	let selectedPost: PostType | null = null;

	$: isBookmarked = selectedPost
		? $bookmarks.map((post) => post.short_id).includes(selectedPost.short_id)
		: false;
	$: isHidden = selectedPost
		? $hiddenPosts.map((post) => post.short_id).includes(selectedPost.short_id)
		: false;
	$: isFollowingUser = selectedPost
		? $usersFollowing.includes(selectedPost.submitter_user.username)
		: false;
</script>

{#if posts.length > 0}
	<ul>
		{#each posts as post (post.short_id)}
			<li class="border-b border-color bg-hover-color">
				<article>
					<ListItem
						avatarUrl={post.submitter_user.avatar_url}
						username={post.submitter_user.username}
						createdAt={post.created_at}
						score={post.score}
						numOfComments={post.comment_count}
						handleMenuDots={() => (selectedPost = post)}
						tags={post.tags}
					>
						<h2 class="leading-snug font-bold hover:underline">
							<a sveltekit:prefetch href="/posts/{post.short_id}"
								>{post.title}</a
							>
						</h2>
					</ListItem>
				</article>
			</li>
		{/each}
	</ul>
{/if}
{#if selectedPost !== null}
	<Modal handleClose={() => (selectedPost = null)}>
		<div class="space-y-3">
			<Button
				text="{isBookmarked ? 'Unsave' : 'Save'} Post"
				handleClick={() => bookmarks.toggle(selectedPost)}
				stretch={true}
				highlight={!isBookmarked}
			/>
			<Button
				text="{isHidden ? 'Unhide' : 'Hide'} Post"
				handleClick={() => hiddenPosts.toggle(selectedPost)}
				stretch={true}
				highlight={!isHidden}
			/>
			<Button
				text="{isFollowingUser ? 'Unfollow' : 'Follow'} {selectedPost
					.submitter_user.username}"
				handleClick={() =>
					usersFollowing.toggle(selectedPost.submitter_user.username)}
				stretch={true}
				highlight={!isFollowingUser}
			/>
			<Button
				text="Close"
				handleClick={() => (selectedPost = null)}
				stretch={true}
			/>
		</div>
	</Modal>
{/if}
