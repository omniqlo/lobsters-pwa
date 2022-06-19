<script lang="ts">
	import {Meta, Story} from "@storybook/addon-svelte-csf";
	import Nav from "./Nav.svelte";
</script>

<Meta
	title="Components/Nav"
	component={Nav}
	argTypes={{
		pathname: {
			control: "select",
			options: ["/", "/tags", "/following", "/settings"],
		},
	}}
/>

<Story name="Nav" let:args>
	<Nav {...args} />
</Story>

<Story name="Nav (at Home)" let:args>
	<Nav pathname={args.pathname || "/"} />
</Story>
