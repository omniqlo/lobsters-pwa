<script lang="ts">
	import Icon from "../Icon/Icon.svelte";
	import type {IconName} from "$lib/icons";

	export let pathname: string;

	const links: {link: string; href: string; icon: IconName}[] = [
		{link: "Home", href: "/", icon: "home"},
		{link: "Tags", href: "/tags", icon: "label"},
		{link: "Following", href: "/following", icon: "following"},
		{link: "Settings", href: "/settings", icon: "settings"},
	];
</script>

<nav class="flex items-center border-t border-color bg-color">
	<ul class="container flex h-full">
		{#each links as link (link.link)}
			<li
				class="flex-1 flex justify-center items-center bg-hover-color"
				class:fill-rose-400={pathname === link.href}
				class:text-rose-400={pathname === link.href}
			>
				<a
					class="flex flex-col items-center p-1"
					sveltekit:prefetch={link.link === "Home" || link.link === "Tags"
						? true
						: undefined}
					href={link.href}
				>
					<Icon name={link.icon} />
					<div class="mt-0.5 text-xs">
						{link.link}
					</div>
				</a>
			</li>
		{/each}
	</ul>
</nav>
