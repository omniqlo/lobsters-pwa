<script lang="ts">
	import {createEventDispatcher} from "svelte";

	export let label = "";
	export let stretch = false;
	export let highlight = false;

	const dispatch = createEventDispatcher<{click: MouseEvent}>();

	function onClick(evt: MouseEvent) {
		dispatch("click", evt);
	}
</script>

<button
	class="rounded-full fill-white font-bold text-white"
	class:w-full={stretch}
	class:bg-rose-400={highlight}
	class:hover:bg-rose-500={highlight}
	class:bg-slate-700={!highlight}
	class:hover:bg-slate-600={!highlight}
	on:click={onClick}
>
	{#if label}
		<div class="px-4 py-2">
			{label}
		</div>
	{/if}
</button>
