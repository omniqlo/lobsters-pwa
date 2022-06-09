<script lang="ts">
	import {icons} from "$lib/icons";
	import type {IconName} from "$lib/icons";

	export let name: IconName;
	export let width = 16;
	export let height = 16;

	$: icon = icons[name];
</script>

{#if icon}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 {icon.box} {icon.box}"
		{width}
		{height}
	>
		{@html icon.svg}
	</svg>
{/if}
