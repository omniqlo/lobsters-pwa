import {vi} from "vitest";
import {render, screen} from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import ListItem from "./ListItem.svelte";

test("ListItem menu launch", async () => {
	// Arrange
	const user = userEvent.setup();
	const {component} = render(ListItem, {
		avatarUrl: "",
		username: "",
		createdAt: "",
		score: 0,
		numOfComments: 0,
	});
	const mock = vi.fn();
	component.$on("menulaunch", mock);

	// Act
	await user.click(screen.getByTestId("list-item-menu-btn"));

	// Assert
	expect(mock).toHaveBeenCalledTimes(1);
});
