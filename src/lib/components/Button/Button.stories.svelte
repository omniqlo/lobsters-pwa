<script lang="ts">
	import {Meta, Template, Story} from "@storybook/addon-svelte-csf";
	import Button from "./Button.svelte";
</script>

<Meta
	title="Components/Button"
	component={Button}
	argTypes={{
		label: {control: "text"},
		stretch: {control: "boolean"},
		highlight: {control: "boolean"},
		onClick: {action: "onClick"},
	}}
/>

<Template let:args>
	<Button {...args} on:click={args.onClick} />
</Template>

<Story
	name="Normal"
	args={{
		label: "Button",
	}}
/>

<Story
	name="Stretched"
	args={{
		label: "Button",
		stretch: true,
	}}
/>

<Story
	name="Highlighted"
	args={{
		label: "Button",
		highlight: true,
	}}
/>
