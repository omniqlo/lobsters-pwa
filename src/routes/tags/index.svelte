<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import type {TagType} from "$lib/types";

	export let tags: TagType[];

	let value = "";

	$: filteredTags = (
		value ? tags.filter((tag) => tag.tag.startsWith(value)) : tags
	).sort((a, b) => a.tag.localeCompare(b.tag));
</script>

<svelte:head>
	<title>Tags | Lobsters</title>
</svelte:head>

<Header title="Tags" showBorder={false} />
<div class="flex px-4">
	<input
		class="w-full p-2 border border-slate-200 dark:border-slate-800 rounded bg-color text-sm"
		bind:value
		placeholder="Search tag"
	/>
</div>
{#if filteredTags.length === 0}
	<div class="flex justify-center p-4 text-sm">No search results</div>
{:else}
	<ul class="flex flex-wrap m-2">
		{#each filteredTags as tag (tag.tag)}
			<li class="w-full sm:w-1/2">
				<a
					class="block h-20 m-2 p-2 border border-slate-200 dark:border-slate-800 rounded bg-hover-color"
					sveltekit:prefetch
					href="/tags/{tag.tag}"
				>
					<div class="font-bold capitalize">{tag.tag}</div>
					<div class="mt-0.5 text-xs">{tag.description}</div>
				</a>
			</li>
		{/each}
	</ul>
{/if}
