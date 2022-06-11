<script lang="ts">
	import {Meta, Story} from "@storybook/addon-svelte-csf";
	import Header from "./Header.svelte";
	import Button from "../Button/Button.svelte";
	import {default as fixture} from "./fixture.json";
</script>

<Meta title="Loki/Header" />

<Story name="Header">
	{#each fixture as args}
		<pre>{JSON.stringify(args, null, 2)}</pre>
		{#if args.hasChildren}
			<Header {...args}>
				<Button label="Button" on:click={() => {}} />
			</Header>
		{:else}
			<Header {...args} />
		{/if}
		<br />
	{/each}
</Story>
