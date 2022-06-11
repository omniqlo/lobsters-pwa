<script lang="ts">
	import {Meta, Story} from "@storybook/addon-svelte-csf";
	import ShowMore from "./ShowMore.svelte";
	import {default as fixture} from "./fixture.json";
</script>

<Meta title="Loki/ShowMore" />

<Story name="ShowMore">
	{#each fixture as args}
		<pre>{JSON.stringify(args, null, 2)}</pre>
		<ShowMore {...args} on:click={() => {}} />
		<br />
	{/each}
</Story>
