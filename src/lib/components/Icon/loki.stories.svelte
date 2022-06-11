<script lang="ts">
	import {Meta, Story} from "@storybook/addon-svelte-csf";
	import type {IconName} from "$lib/icons";
	import Icon from "./Icon.svelte";
	import {default as json} from "./fixture.json";

	const fixture = json as {name: IconName; width: number; height: number}[];
</script>

<Meta title="Loki/Icon" />

<Story name="Icon">
	{#each fixture as args}
		<pre>{JSON.stringify(args, null, 2)}</pre>
		<Icon {...args} />
		<br />
	{/each}
</Story>
