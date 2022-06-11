<script lang="ts">
	import {Meta, Template, Story} from "@storybook/addon-svelte-csf";
	import ShowMore from "./ShowMore.svelte";
</script>

<Meta
	title="Components/ShowMore"
	component={ShowMore}
	argTypes={{
		show: {control: "boolean"},
		loading: {control: "boolean"},
		onClick: {action: "onClick"},
	}}
/>

<Template let:args>
	<ShowMore {...args} on:click={args.onClick} />
</Template>

<Story
	name="Normal"
	args={{
		show: true,
	}}
/>

<Story
	name="With Loading"
	args={{
		show: true,
		loading: true,
	}}
/>

<Story name="With No Show" />
