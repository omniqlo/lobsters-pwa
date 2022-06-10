<script lang="ts">
	import Button from "./Button.svelte";
	import {default as fixture} from "./fixture.json";
</script>

{#each fixture as args}
	<pre>{JSON.stringify(args, null, 2)}</pre>
	<Button {...args} on:click={() => {}} />
	<br />
{/each}
