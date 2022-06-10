<script lang="ts">
	import {goto} from "$app/navigation";
	import {page} from "$app/stores";
	import Button from "$lib/components/Button/Button.svelte";
</script>

<svelte:head>
	<title>Error | Lobsters</title>
</svelte:head>

<div class="flex flex-col justify-center items-center w-full h-full">
	<div class="px-4 py-3">
		<div class="text-lg">Sorry, there was an error</div>
		{#if $page.error?.message}
			<div class="mt-2 rounded text-xs text-red-700">
				{$page.error.message}
			</div>
		{/if}
		<div class="flex justify-between items-center mt-6">
			<Button label="Go home" on:click={() => goto("/")} />
			<a
				class="text-sm hover:underline"
				href="https://github.com/omniqlo/lobsters-pwa/issues"
				rel="external"
			>
				Report error
			</a>
		</div>
	</div>
</div>
