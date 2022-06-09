<script lang="ts">
	import "../app.css";
	import {browser} from "$app/env";
	import {afterNavigate, beforeNavigate} from "$app/navigation";
	import {initTheme, toast} from "$lib/stores";
	import Nav from "$lib/components/Nav.svelte";
	import Toast from "$lib/components/Toast.svelte";

	// Initially set to `true` since users needs a valid connection to retrieve the server-rendered HTML. Then `window.navigator.onLine` is called during hydration.
	let isOnline: boolean = browser ? window.navigator.onLine : true;

	if (browser) {
		window.topbar.config({
			barColors: {
				"1": "#FB7185", // rose-400
			},
		});
	}

	beforeNavigate(({from, to}) => {
		if (from && to) {
			window.topbar.show();
		}
	});

	afterNavigate(({from, to}) => {
		if (from && to) {
			window.topbar.hide();
		}
	});

	initTheme();
</script>

<svelte:window
	on:online={() => (isOnline = true)}
	on:offline={() => (isOnline = false)}
/>

{#if !isOnline}
	<div
		class="flex justify-center items-center h-6 bg-red-700 text-xs text-white"
	>
		Disconnected from internet
	</div>
{/if}
<div class="bg-color fill-color text-color">
	<Nav />
	<main
		class="fixed top-0 inset-x-0 bg-color overflow-y-auto"
		class:top-6={!isOnline}
	>
		<div class="container">
			<slot />
		</div>
	</main>
	{#if $toast !== null}
		<Toast toast={$toast} />
	{/if}
</div>
