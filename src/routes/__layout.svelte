<script lang="ts">
	import "../app.css";
	import {browser} from "$app/env";
	import {page} from "$app/stores";
	import {afterNavigate, beforeNavigate} from "$app/navigation";
	import {initTheme, toast} from "$lib/stores";
	import Nav from "$lib/components/Nav/Nav.svelte";
	import Toast from "$lib/components/Toast/Toast.svelte";

	// Initially set to `true` since users needs a valid connection to retrieve the server-rendered HTML. Then `window.navigator.onLine` is called during hydration.
	let isOnline: boolean = browser ? window.navigator.onLine : true;

	if (browser) {
		window.topbar.config({
			barColors: {
				"1": "#E11D48", // rose-600
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
	<div class="fixed bottom-0 inset-x-0">
		<Nav pathname={$page.url.pathname} />
	</div>
	<main
		class="fixed top-0 inset-x-0 bg-color overflow-y-auto"
		class:top-6={!isOnline}
	>
		<div class="container">
			<slot />
		</div>
	</main>
	{#if $toast !== null}
		<div class="toast fixed inset-x-0">
			<Toast toast={$toast} />
		</div>
	{/if}
</div>
