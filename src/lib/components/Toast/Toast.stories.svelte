<script lang="ts">
	import {Meta, Template, Story} from "@storybook/addon-svelte-csf";
	import Toast from "./Toast.svelte";
</script>

<Meta
	title="Components/Toast"
	component={Toast}
	argTypes={{
		msg: {control: "text"},
		type: {control: "select", options: ["info", "error"]},
	}}
/>

<Template let:args>
	<Toast toast={args} />
</Template>

<Story
	name="Info"
	args={{
		msg: "Message",
		type: "info",
	}}
/>

<Story
	name="Error"
	args={{
		msg: "Message",
		type: "error",
	}}
/>

<Story
	name="With Long Message"
	args={{
		msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam turpis, lacinia non varius et, sollicitudin at arcu. Nulla facilisi. Pellentesque id orci turpis. Mauris interdum faucibus magna quis maximus. Duis commodo tincidunt luctus. In facilisis consectetur lorem, eu ornare dolor malesuada et. Donec mattis purus at elit porttitor maximus. Aliquam a purus nunc.",
		type: "info",
	}}
/>
