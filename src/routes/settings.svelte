<script lang="ts">
	import {theme, toast} from "$lib/stores";
	import Header from "$lib/components/Header.svelte";
	import Icon from "$lib/components/Icon.svelte";
	import {storeBackup, exportBackup} from "$lib/backup";

	let fileInput: HTMLInputElement;

	function importBackup(evt: any) {
		try {
			if (evt.target.files && evt.target.files.length > 0) {
				const reader = new FileReader();
				reader.readAsText(evt.target.files[0]);
				reader.onload = (evt2) => {
					if (evt2.target && typeof evt2.target.result === "string") {
						const backup = JSON.parse(evt2.target.result);
						storeBackup(backup);
					}
				};
			}
		} catch (err) {
			toast.set({msg: "Error importing backup", type: "error"});
		}
	}
</script>

<svelte:head>
	<title>Settings | Lobsters</title>
</svelte:head>

<Header title="Settings" />

<h2 class="border-color">Content</h2>
<ul>
	<li class="border-color bg-hover-color">
		<a class="flex justify-between items-center" href="/bookmarks">
			<div>Bookmarks</div>
			<Icon name="arrowRight" />
		</a>
	</li>
	<li class="border-color bg-hover-color">
		<a class="flex justify-between items-center" href="/hidden-posts">
			<div>Hidden Posts</div>
			<Icon name="arrowRight" />
		</a>
	</li>
</ul>

<h2 class="border-color">Backup</h2>
<ul>
	<li class="border-color bg-hover-color">
		<button class="flex w-full" on:click={() => fileInput.click()}
			>Import Backup</button
		>
	</li>
	<li class="border-color bg-hover-color">
		<button class="flex w-full" on:click={exportBackup}>Export Backup</button>
	</li>
</ul>
<input
	class="hidden"
	bind:this={fileInput}
	type="file"
	accept="application/json"
	on:change={importBackup}
/>

<h2 class="border-color">Dark Mode</h2>
<ul>
	<li class="border-color bg-hover-color">
		<button class="flex w-full" on:click={() => theme.set(null)}>
			Device Settings
			{#if $theme === null}
				(Current)
			{/if}
		</button>
	</li>
	<li class="border-color bg-hover-color">
		<button class="flex w-full" on:click={() => theme.set("light")}>
			Light Mode
			{#if $theme === "light"}
				(Current)
			{/if}
		</button>
	</li>
	<li class="border-color bg-hover-color">
		<button class="flex w-full" on:click={() => theme.set("dark")}>
			Dark Mode
			{#if $theme === "dark"}
				(Current)
			{/if}
		</button>
	</li>
</ul>

<h2 class="border-color">Issues</h2>
<ul>
	<li class="border-color bg-hover-color">
		<a
			class="flex justify-between items-center"
			href="https://github.com/omniqlo/lobsters-pwa/issues"
			rel="external"
		>
			<div>Report Issue</div>
			<Icon name="arrowRight" />
		</a>
	</li>
</ul>

<style lang="postcss">
	h2 {
		@apply px-4 pt-6 pb-2 border-b text-xs font-bold tracking-wide uppercase text-rose-400;
	}
	li {
		@apply border-b;
	}
	li > * {
		@apply px-4 py-3;
	}
</style>
