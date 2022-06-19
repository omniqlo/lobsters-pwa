<script lang="ts">
	import {createEventDispatcher} from "svelte";

	const dispatch = createEventDispatcher<{close: MouseEvent}>();

	function onClick(evt: MouseEvent) {
		dispatch("close", evt);
	}
</script>

<div class="fixed inset-0 flex flex-col justify-end bg-black/60">
	<div class="flex-1" on:click={onClick} data-testid="outside-modal" />
	<div class="bg-color">
		<div class="container p-4">
			<slot />
		</div>
	</div>
</div>
