<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";
	import {hiddenPosts, usersFollowing, toast} from "$lib/stores";
	import Posts from "$lib/components/Posts.svelte";
	import Button from "$lib/components/Button.svelte";
	import ShowMore from "$lib/components/ShowMore.svelte";
	import {filterPosts, formatDate, mergePosts} from "$lib/utils";
	import type {PostType, UserType} from "$lib/types";

	export let user: UserType;
	export let firstPagePosts: PostType[];

	let loading = false;
	let hasNextPage = firstPagePosts.length >= 25;
	let nextPage = 2;

	$: posts = firstPagePosts;
	$: filteredPosts = filterPosts(posts, $hiddenPosts);
	$: isFollowing = $usersFollowing.includes(user.username);

	async function handleClick() {
		try {
			if (hasNextPage) {
				loading = true;

				const path = `/users/${user.username}/${nextPage}.json`;
				const res = await fetch(path);
				const json = await res.json();

				if (res.ok) {
					loading = false;
					hasNextPage = json.posts.length >= 25;
					nextPage = nextPage + 1;
					posts = mergePosts(posts, json.posts);
				} else {
					throw new Error(json);
				}
			}
		} catch (err) {
			loading = false;
			toast.set({msg: "Error fetching more posts", type: "error"});
		}
	}
</script>

<svelte:head>
	<title>{user.username} | Lobsters</title>
</svelte:head>

<header class="px-4 py-3 border-b border-color text-sm">
	<div class="flex justify-between items-start">
		<a href="/users/{user.username}">
			<img
				class="w-16 h-16 rounded-full"
				src="https://lobste.rs{user.avatar_url}"
				alt="Avatar of the user {user.username}"
				width="64"
				height="64"
			/>
		</a>
		<Button
			text={isFollowing ? "Unfollow" : "Follow"}
			handleClick={() => usersFollowing.toggle(user.username)}
			highlight={!isFollowing}
		/>
	</div>
	<h1 class="mt-2 text-xl font-black">
		<a class="hover:underline" href="/users/{user.username}">{user.username}</a>
	</h1>
	{#if user.about}
		<div class="about mt-1.5">
			<SvelteMarkdown source={user.about} />
		</div>
	{/if}
	<ul class="flex flex-col mt-2 fill-slate-500 text-slate-500">
		<li>
			Karma: {user.karma}
		</li>
		<li>
			Joined
			<time datetime={user.created_at}>{formatDate(user.created_at)}</time>
		</li>
		<li>
			Invited by
			<a class="hover:underline" href="/users/{user.invited_by_user}"
				>{user.invited_by_user}</a
			>
		</li>
		{#if user.twitter_username}
			<li>
				Twitter:
				<a
					class="hover:underline"
					href="https://twitter.com/{user.twitter_username}"
					rel="external">{user.twitter_username}</a
				>
			</li>
		{/if}
		{#if user.github_username}
			<li>
				GitHub:
				<a
					class="hover:underline"
					href="https://github.com/{user.github_username}"
					rel="external">{user.github_username}</a
				>
			</li>
		{/if}
	</ul>
</header>
<Posts posts={filteredPosts} />
<ShowMore show={hasNextPage} {handleClick} {loading} />
