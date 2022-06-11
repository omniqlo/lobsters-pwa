<script lang="ts">
	import {Meta, Template, Story} from "@storybook/addon-svelte-csf";
	import Icon from "./Icon.svelte";
</script>

<Meta
	title="Components/Icon"
	component={Icon}
	argTypes={{
		name: {control: "text"},
		width: {control: "number"},
		height: {control: "number"},
	}}
/>

<Template let:args>
	<Icon {...args} />
</Template>

<Story
	name="Icon"
	args={{
		name: "home",
	}}
/>
