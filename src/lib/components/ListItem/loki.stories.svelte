<script lang="ts">
	import {Meta, Story} from "@storybook/addon-svelte-csf";
	import ListItem from "./ListItem.svelte";
	import {default as fixture} from "./fixture.json";
</script>

<Meta title="Loki/ListItem" />

<Story name="ListItem">
	{#each fixture as args}
		<pre>{JSON.stringify(args, null, 2)}</pre>
		<ListItem {...args} />
		<br />
	{/each}
</Story>
