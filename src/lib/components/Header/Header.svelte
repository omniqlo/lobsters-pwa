<script lang="ts">
	export let title: string;
	export let link = "";
	export let showBorder = true;
</script>

<header
	class="flex justify-between items-center px-4 py-3"
	class:border-b={showBorder}
	class:border-color={showBorder}
>
	<h1 class="text-xl font-black capitalize">
		{#if link !== ""}
			<a class="hover:underline" sveltekit:prefetch href={link}>{title}</a>
		{:else}
			{title}
		{/if}
	</h1>
	<slot />
</header>
