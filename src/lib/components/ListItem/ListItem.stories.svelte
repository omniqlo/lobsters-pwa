<script lang="ts">
	import {Meta, Template, Story} from "@storybook/addon-svelte-csf";
	import ListItem from "./ListItem.svelte";

	const now = new Date().toISOString();
</script>

<Meta
	title="Components/ListItem"
	component={ListItem}
	argTypes={{
		hasParent: {control: "boolean"},
		canBeHidden: {control: "boolean"},
		avatarUrl: {control: "text"},
		username: {control: "text"},
		createdAt: {control: "date"},
		score: {control: "number"},
		numOfComments: {control: "number"},
		onMenuLaunch: {action: "onMenuLaunch"},
	}}
/>

<Template let:args>
	<ListItem
		{...args}
		createdAt={typeof args.createdAt === "number"
			? new Date(args.createdAt).toISOString()
			: now}
		on:menulaunch={args.onMenuLaunch}
	/>
</Template>

<Story
	name="ListItem"
	args={{
		hasParent: false,
		canBeHidden: false,
		avatarUrl: "https://i.pravatar.cc/100",
		username: "username",
		createdAt: now,
		score: 10,
		numOfComments: 10,
		tags: ["tag"],
	}}
/>

<Story
	name="With No Avatar"
	args={{
		hasParent: false,
		canBeHidden: false,
		avatarUrl: "",
		username: "username",
		createdAt: now,
		score: 10,
		numOfComments: 10,
		tags: ["tag"],
	}}
/>

<Story
	name="With No Tags"
	args={{
		hasParent: false,
		canBeHidden: false,
		avatarUrl: "https://i.pravatar.cc/100",
		username: "username",
		createdAt: now,
		score: 10,
		numOfComments: 10,
		tags: [],
	}}
/>
