<script lang="ts">
	import {slide} from "svelte/transition";
	import type {ToastType} from "$lib/types";

	export let toast: ToastType;
</script>

<div
	class="toast fixed inset-x-0 text-white"
	class:bg-green-700={toast.type === "info"}
	class:bg-red-700={toast.type === "error"}
	in:slide
	out:slide
>
	<div class="container flex justify-center p-2 text-xs">
		{toast.msg}
	</div>
</div>
