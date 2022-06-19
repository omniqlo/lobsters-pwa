import {vi} from "vitest";
import {render, screen} from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal.svelte";

test("Modal close", async () => {
	// Arrange
	const user = userEvent.setup();
	const {component} = render(Modal);
	const mock = vi.fn();
	component.$on("close", mock);

	// Act
	await user.click(screen.getByTestId("outside-modal"));

	// Assert
	expect(mock).toHaveBeenCalledTimes(1);
});
