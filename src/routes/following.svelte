<script lang="ts">
	import {tagsFollowing, usersFollowing} from "$lib/stores";
	import Header from "$lib/components/Header/Header.svelte";
	import Button from "$lib/components/Button/Button.svelte";

	$: lists = [
		{name: "tags", list: $tagsFollowing, store: tagsFollowing},
		{name: "users", list: $usersFollowing, store: usersFollowing},
	];
</script>

<svelte:head>
	<title>Following | Lobsters</title>
</svelte:head>

{#each lists as list}
	<Header title="{list.name} following" />
	{#if list.list.length > 0}
		<ul>
			{#each list.list as item}
				<li
					class="flex justify-between items-center px-4 py-3 border-b border-color"
					data-testid="user-following"
				>
					<a
						class="hover:underline"
						sveltekit:prefetch
						href="/{list.name}/{item}"
					>
						{item}
					</a>
					<Button label="Unfollow" on:click={() => list.store.toggle(item)} />
				</li>
			{/each}
		</ul>
	{:else}
		<div class="px-4 py-3">None</div>
	{/if}
{/each}
