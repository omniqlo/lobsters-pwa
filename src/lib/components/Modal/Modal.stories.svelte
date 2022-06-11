<script lang="ts">
	import {Meta, Story} from "@storybook/addon-svelte-csf";
	import Modal from "./Modal.svelte";
</script>

<Meta
	title="Components/Modal"
	component={Modal}
	argTypes={{
		onClose: {action: "onClick"},
	}}
/>

<Story name="Modal" let:args>
	<Modal on:close={args.onClose}>
		<div>Hello, World!</div>
	</Modal>
</Story>
