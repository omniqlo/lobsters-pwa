<script lang="ts">
	import {bookmarks} from "$lib/stores";
	import Header from "$lib/components/Header.svelte";
	import Posts from "$lib/components/Posts.svelte";

	// Show posts in reverse order. `revese` is an in-place operation.
	$: posts = [...$bookmarks].reverse();
</script>

<svelte:head>
	<title>Bookmarks | Lobsters</title>
</svelte:head>

<Header title="Bookmarks" />
{#if posts.length > 0}
	<Posts {posts} />
{:else}
	<div class="px-4 py-3">No bookmarks</div>
{/if}
