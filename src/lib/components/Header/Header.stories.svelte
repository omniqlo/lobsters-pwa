<script lang="ts">
	import {Meta, Template, Story} from "@storybook/addon-svelte-csf";
	import Header from "./Header.svelte";
	import Button from "../Button/Button.svelte";
</script>

<Meta
	title="Components/Header"
	component={Header}
	argTypes={{
		title: {control: "text"},
		link: {control: "text"},
		showBorder: {control: "boolean"},
	}}
/>

<Template let:args>
	<Header {...args} />
</Template>

<Story
	name="Normal"
	args={{
		title: "Title",
	}}
/>

<Story
	name="With Link"
	args={{
		title: "Title",
		link: "https://storybook.js.org/",
	}}
/>

<Story
	name="Without Border"
	args={{
		title: "Title",
		showBorder: false,
	}}
/>

<Story name="With Children" argTypes={{onClick: {action: "onClick"}}} let:args>
	<Header {...args} title={args.title || "Title"}>
		<Button label="Button" on:click={args.onClick} />
	</Header>
</Story>

<Story
	name="With Long Title"
	args={{
		title:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam turpis, lacinia non varius et, sollicitudin at arcu. Nulla facilisi.",
	}}
/>
