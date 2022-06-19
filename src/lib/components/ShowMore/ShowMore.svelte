<script lang="ts">
	import {createEventDispatcher} from "svelte";

	export let show: boolean;
	export let loading: boolean;

	const dispatch = createEventDispatcher<{click: MouseEvent}>();

	function onClick(evt: MouseEvent) {
		dispatch("click", evt);
	}
</script>

{#if show}
	<button
		class="flex justify-center w-full p-3 bg-hover-color text-sm text-rose-600"
		class:bg-slate-100={loading}
		disabled={loading}
		on:click={onClick}
	>
		{#if loading}
			Loading...
		{:else}
			Show more posts
		{/if}
	</button>
{:else}
	<div class="flex justify-center p-3 text-sm">No more posts</div>
{/if}
