import {vi} from "vitest";
import {render, screen} from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import Button from "./Button.svelte";

test("Button click", async () => {
	// Arrange
	const user = userEvent.setup();
	const {component} = render(Button, {label: "Button"});
	const mock = vi.fn();
	component.$on("click", mock);

	// Act
	await user.click(screen.getByRole("button", {name: "Button"}));

	// Assert
	expect(mock).toHaveBeenCalledTimes(1);
});
