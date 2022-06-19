<script context="module" lang="ts">
	import type {Load} from "@sveltejs/kit";

	export const load: Load = async ({url, fetch}) => {
		const type = url.searchParams.get("type");
		const path =
			type === "active" || type === "newest"
				? `/${type}/1.json`
				: "/frontpage/1.json";
		const res = await fetch(path);

		return {
			status: res.status,
			props: {
				firstPagePosts: res.ok && (await res.json()).posts,
				type:
					type === "active" ? "Active" : type === "newest" ? "Newest" : "Home",
			},
		};
	};
</script>

<script lang="ts">
	import {hiddenPosts, toast} from "$lib/stores";
	import Posts from "$lib/components/Posts/Posts.svelte";
	import ShowMore from "$lib/components/ShowMore/ShowMore.svelte";
	import {filterPosts, mergePosts} from "$lib/utils";
	import type {PostType} from "$lib/types";

	export let firstPagePosts: PostType[];
	export let type: "Active" | "Home" | "Newest";

	let loading = false;
	let hasNextPage = firstPagePosts.length >= 25;
	let nextPage = 2;

	$: posts = firstPagePosts;
	$: filteredposts = filterPosts(posts, $hiddenPosts);

	const links = [
		{link: "Home", href: "/"},
		{link: "Active", href: "/?type=active"},
		{link: "Newest", href: "/?type=newest"},
	];

	async function onClick() {
		try {
			if (hasNextPage) {
				loading = true;

				const path =
					type === "Active" || type === "Newest"
						? `/${type.toLowerCase()}/${nextPage}.json`
						: `/frontpage/${nextPage}.json`;
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
	<title>{type} | Lobsters</title>
</svelte:head>

<ul class="flex border-b border-color text-sm">
	{#each links as link (link.link)}
		<li class="flex-1 flex justify-center bg-hover-color">
			<a
				class="p-2"
				class:text-rose-400={type === link.link}
				sveltekit:prefetch
				href={link.href}>{link.link}</a
			>
		</li>
	{/each}
</ul>
<Posts posts={filteredposts} />
<ShowMore show={hasNextPage} {loading} on:click={onClick} />
