<script lang="ts">
	import {hiddenPosts, usersFollowing, toast} from "$lib/stores";
	import UserDetails from "$lib/components/UserDetails/UserDetails.svelte";
	import Posts from "$lib/components/Posts/Posts.svelte";
	import ShowMore from "$lib/components/ShowMore/ShowMore.svelte";
	import {filterPosts, mergePosts} from "$lib/utils";
	import type {PostType, UserType} from "$lib/types";

	export let user: UserType;
	export let firstPagePosts: PostType[];

	let loading = false;
	let hasNextPage = firstPagePosts.length >= 25;
	let nextPage = 2;

	$: posts = firstPagePosts;
	$: filteredPosts = filterPosts(posts, $hiddenPosts);
	$: isFollowing = $usersFollowing.includes(user.username);

	async function onClick() {
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

<UserDetails
	{user}
	{isFollowing}
	on:click={() => usersFollowing.toggle(user.username)}
/>
<Posts posts={filteredPosts} />
<ShowMore show={hasNextPage} {loading} on:click={onClick} />
