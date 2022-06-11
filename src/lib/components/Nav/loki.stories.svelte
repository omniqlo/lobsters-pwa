<script lang="ts">
	import {Meta, Story} from "@storybook/addon-svelte-csf";
	import Nav from "./Nav.svelte";

	const fixture = ["/", "/tags", "/following", "/settings", ""];
</script>

<Meta title="Loki/Nav" />

<Story name="Nav">
	{#each fixture as args}
		<pre>{JSON.stringify(args, null, 2)}</pre>
		<Nav pathname={args} />
		<br />
	{/each}
</Story>
