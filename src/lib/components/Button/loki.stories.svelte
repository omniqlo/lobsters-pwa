<script lang="ts">
	import {Meta, Story} from "@storybook/addon-svelte-csf";
	import Button from "./Button.svelte";
	import {default as fixture} from "./fixture.json";
</script>

<Meta title="Loki/Button" />

<Story name="Button">
	{#each fixture as args}
		<pre>{JSON.stringify(args, null, 2)}</pre>
		<Button {...args} on:click={() => {}} />
		<br />
	{/each}
</Story>
