<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import {formatDate} from "$lib/utils";

	export let hasParent = false;
	export let canBeHidden = false;
	export let avatarUrl: string;
	export let username: string;
	export let createdAt: string;
	export let score: number;
	export let numOfComments: number;
	export let handleMenuDots: () => void;
	export let tags: string[] | undefined = undefined;
</script>

<div class="flex px-4">
	<div class="flex-none flex flex-col items-center mr-3">
		{#if hasParent}
			<div class="w-0.5 h-1 bg-slate-200 dark:bg-slate-700" />
		{/if}
		<a
			class="my-2"
			class:mt-3={!hasParent}
			sveltekit:prefetch
			href="/users/{username}"
		>
			<img
				class="w-12 h-12 rounded-full"
				src="https://lobste.rs{avatarUrl}"
				alt="Avatar of the user {username}"
				width="48"
				height="48"
				loading="lazy"
			/>
		</a>
		{#if canBeHidden}
			<button
				class="flex-1 px-4"
				on:click={() => {
					console.log("todo");
				}}
			>
				<div class="w-0.5 h-full bg-slate-200 dark:bg-slate-700" />
			</button>
		{/if}
	</div>
	<div class="flex-1 py-3">
		<header
			class="flex justify-between items-center fill-slate-500 text-slate-500"
		>
			<div class="flex text-sm">
				<a
					class="font-bold text-color hover:underline"
					sveltekit:prefetch
					href="/users/{username}">{username}</a
				>
				<span class="px-1">·</span>
				<time datetime={createdAt}>{formatDate(createdAt)}</time>
			</div>
			<buttton
				class="p-1 rounded-full hover:bg-rose-200"
				on:click={handleMenuDots}
			>
				<Icon name="menuDots" width={14} height={14} />
			</buttton>
		</header>
		<div class="my-3">
			<slot />
		</div>
		<footer class="flex justify-between items-center">
			<div class="flex items-center fill-slate-500 text-sm text-slate-500">
				<div class="flex items-center">
					<div>
						<Icon name="thumbsUp" />
					</div>
					<div class="pl-2">{score}</div>
				</div>
				<div class="flex items-center ml-4">
					<div>
						<Icon name="comment" />
					</div>
					<div class="pl-2">{numOfComments}</div>
				</div>
			</div>
			{#if tags && tags.length > 0}
				<ul class="flex flex-wrap justify-end text-xs">
					{#each tags as tag (tag)}
						<li>
							<a
								class="block ml-1 px-1 py-0.5 border border-slate-200 dark:border-slate-700 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
								sveltekit:prefetch
								href="/tags/{tag}">{tag}</a
							>
						</li>
					{/each}
				</ul>
			{/if}
		</footer>
	</div>
</div>
