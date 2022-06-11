<script lang="ts">
	import {Meta, Story} from "@storybook/addon-svelte-csf";
	import type {ToastType} from "$lib/types";
	import Toast from "./Toast.svelte";
	import {default as json} from "./fixture.json";

	const fixture = json as ToastType[];
</script>

<Meta title="Loki/Toast" />

<Story name="Toast">
	{#each fixture as args}
		<pre>{JSON.stringify(args, null, 2)}</pre>
		<Toast toast={args} />
		<br />
	{/each}
</Story>
