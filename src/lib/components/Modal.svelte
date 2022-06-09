<script lang="ts">
	export let handleClose: () => void;
</script>

<div class="fixed inset-0 flex flex-col justify-end bg-black/60">
	<div class="flex-1" on:click={handleClose} />
	<div class="bg-color">
		<div class="container p-4">
			<slot />
		</div>
	</div>
</div>
