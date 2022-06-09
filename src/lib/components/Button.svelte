<script lang="ts">
	export let text: string | undefined = undefined;
	export let handleClick: () => void;
	export let stretch = false;
	export let highlight = false;
</script>

<button
	class="rounded-full fill-white font-bold text-white"
	class:w-full={stretch}
	class:bg-rose-400={highlight}
	class:hover:bg-rose-500={highlight}
	class:bg-slate-700={!highlight}
	class:hover:bg-slate-600={!highlight}
	on:click={handleClick}
>
	{#if text}
		<div class="px-4 py-2">
			{text}
		</div>
	{/if}
	<slot />
</button>
