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
	name="With Stretch"
	args={{
		label: "Button",
		stretch: true,
	}}
/>

<Story
	name="With Highlight"
	args={{
		label: "Button",
		highlight: true,
	}}
/>

<Story
	name="With Long Label"
	args={{
		label:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam turpis, lacinia non varius et, sollicitudin at arcu. Nulla facilisi. Pellentesque id orci turpis.",
	}}
/>
