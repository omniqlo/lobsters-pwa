<script lang="ts">
	import {hiddenPosts} from "$lib/stores";
	import Header from "$lib/components/Header/Header.svelte";
	import Posts from "$lib/components/Posts/Posts.svelte";

	// Show posts in reverse order. `revese` is an in-place operation.
	$: posts = [...$hiddenPosts].reverse();
</script>

<svelte:head>
	<title>Hidden Posts | Lobsters</title>
</svelte:head>

<Header title="Hidden Posts" />
{#if posts.length > 0}
	<Posts {posts} />
{:else}
	<div class="px-4 py-3">No hidden posts</div>
{/if}
