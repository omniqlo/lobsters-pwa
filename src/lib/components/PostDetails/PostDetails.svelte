<script lang="ts">
	import {createEventDispatcher} from "svelte";
	import Icon from "$lib/components/Icon/Icon.svelte";
	import {formatDate} from "$lib/utils";
	import type {PostType} from "$lib/types";

	export let post: PostType;

	const dispatch = createEventDispatcher<{menulaunch: MouseEvent}>();

	function onMenuLaunch(evt: MouseEvent) {
		dispatch("menulaunch", evt);
	}
</script>

<div class="px-4 py-3 border-b border-color">
	<header class="flex justify-between items-start">
		<div class="flex">
			<a
				class="mr-3"
				sveltekit:prefetch
				href="/users/{post.submitter_user.username}"
			>
				<img
					class="w-12 h-12 rounded-full"
					src="https://lobste.rs{post.submitter_user.avatar_url}"
					alt="Avatar of the user {post.submitter_user.username}"
					width="48"
					height="48"
				/>
			</a>
			<div class="flex flex-col">
				<a
					class="font-bold text-sm hover:underline"
					sveltekit:prefetch
					href="/users/{post.submitter_user.username}"
					>{post.submitter_user.username}</a
				>
				<time class="mt-0.5 text-xs text-slate-500" datetime={post.created_at}
					>{formatDate(post.created_at)}</time
				>
			</div>
		</div>
		<button
			class="p-1 rounded-full hover:bg-rose-200 fill-slate-500"
			on:click={onMenuLaunch}
		>
			<Icon name="menuDots" width={14} height={14} />
		</button>
	</header>
	<h1 class="my-3 leading-snug text-lg font-bold">
		<a class="hover:underline" href={post.url} rel="external">
			{post.title}
		</a>
	</h1>
	<footer class="flex fill-slate-500 text-sm text-slate-500">
		<div class="flex items-center">
			<div>
				<Icon name="thumbsUp" />
			</div>
			<div class="pl-2">{post.score}</div>
		</div>
		<div class="flex items-center ml-4">
			<div>
				<Icon name="comment" />
			</div>
			<div class="pl-2">{post.comment_count}</div>
		</div>
	</footer>
</div>
