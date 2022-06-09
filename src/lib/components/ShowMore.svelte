<script lang="ts">
	export let show: boolean;
	export let handleClick: () => void;
	export let loading: boolean;
</script>

{#if show}
	<button
		class="flex justify-center w-full p-3 bg-hover-color text-sm text-rose-400"
		class:bg-slate-100={loading}
		on:click={handleClick}
		disabled={loading}
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
