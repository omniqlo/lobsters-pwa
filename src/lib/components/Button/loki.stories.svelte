<script lang="ts">
	import {Meta, Template, Story} from "@storybook/addon-svelte-csf";
	import Loki from "./Loki.svelte";
</script>

<Meta title="Loki/Button" />

<Template let:args>
	<Loki {...args} />
</Template>

<Story name="Button" />
