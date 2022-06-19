<script context="module" lang="ts">
	import type {Load} from "@sveltejs/kit";

	export const load: Load = async ({params, fetch}) => {
		try {
			const {tag} = params;
			const res = await fetch(`/${tag}/1.json`);

			return {
				status: res.status,
				props: {
					firstPagePosts: res.ok && (await res.json()).posts,
				},
			};
		} catch (err) {
			return {
				status: 500,
			};
		}
	};
</script>

<script lang="ts">
	import {page} from "$app/stores";
	import {hiddenPosts, tagsFollowing, toast} from "$lib/stores";
	import Header from "$lib/components/Header/Header.svelte";
	import Posts from "$lib/components/Posts/Posts.svelte";
	import Button from "$lib/components/Button/Button.svelte";
	import ShowMore from "$lib/components/ShowMore/ShowMore.svelte";
	import {filterPosts, mergePosts} from "$lib/utils";
	import type {PostType} from "$lib/types";

	export let firstPagePosts: PostType[];

	let loading = false;
	let hasNextPage = firstPagePosts.length >= 25;
	let nextPage = 2;

	$: tag = $page.params.tag;
	$: posts = firstPagePosts;
	$: filteredPosts = filterPosts(posts, $hiddenPosts);
	$: isFollowing = $tagsFollowing.includes(tag);

	async function onClick() {
		try {
			if (hasNextPage) {
				loading = true;

				const path = `/${tag}/${nextPage}.json`;
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
	<title>{tag} | Lobsters</title>
</svelte:head>

<Header title={tag} link="/tags/{tag}">
	<Button
		label={isFollowing ? "Unfollow" : "Follow"}
		highlight={!isFollowing}
		on:click={() => tagsFollowing.toggle(tag)}
	/>
</Header>
<Posts posts={filteredPosts} />
<ShowMore show={hasNextPage} {loading} on:click={onClick} />
