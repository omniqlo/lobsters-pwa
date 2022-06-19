<script lang="ts">
	import {bookmarks, hiddenPosts, usersFollowing} from "$lib/stores";
	import ListItem from "$lib/components/ListItem/ListItem.svelte";
	import Modal from "$lib/components/Modal/Modal.svelte";
	import Button from "$lib/components/Button/Button.svelte";
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
		{#each posts as post, idx (post.short_id)}
			<li
				class="border-b border-color bg-hover-color"
				aria-setsize={posts.length}
				aria-posinset={idx + 1}
				data-testid="post"
			>
				<article>
					<ListItem
						avatarUrl="https://lobste.rs{post.submitter_user.avatar_url}"
						username={post.submitter_user.username}
						createdAt={post.created_at}
						score={post.score}
						numOfComments={post.comment_count}
						tags={post.tags}
						on:menulaunch={() => (selectedPost = post)}
					>
						<h2
							class="leading-snug font-bold hover:underline"
							data-testid="post-title"
						>
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
	<Modal on:close={() => (selectedPost = null)}>
		<div class="space-y-3">
			<Button
				label="{isBookmarked ? 'Unsave' : 'Save'} Post"
				stretch={true}
				highlight={!isBookmarked}
				on:click={() => bookmarks.toggle(selectedPost)}
			/>
			<Button
				label="{isHidden ? 'Unhide' : 'Hide'} Post"
				stretch={true}
				highlight={!isHidden}
				on:click={() => hiddenPosts.toggle(selectedPost)}
			/>
			<Button
				label="{isFollowingUser ? 'Unfollow' : 'Follow'} {selectedPost
					.submitter_user.username}"
				stretch={true}
				highlight={!isFollowingUser}
				on:click={() =>
					usersFollowing.toggle(selectedPost.submitter_user.username)}
			/>
			<Button
				label="Close"
				stretch={true}
				on:click={() => (selectedPost = null)}
			/>
		</div>
	</Modal>
{/if}
