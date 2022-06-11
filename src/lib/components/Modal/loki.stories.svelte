<script lang="ts">
	import {Meta, Story} from "@storybook/addon-svelte-csf";
	import Modal from "./Modal.svelte";
</script>

<Meta title="Loki/Modal" />

<Story name="Modal">
	<Modal on:close={() => {}}>
		<div>Hello, World!</div>
	</Modal>
</Story>
