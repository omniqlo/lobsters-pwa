import {vi} from "vitest";
import {render, screen} from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import ShowMore from "./ShowMore.svelte";

test("ShowMore click", async () => {
	// Arrange
	const user = userEvent.setup();
	const {component} = render(ShowMore, {show: true, loading: false});
	const mock = vi.fn();
	component.$on("click", mock);

	// Act
	await user.click(screen.getByRole("button", {name: "Show more posts"}));

	// Assert
	expect(mock).toHaveBeenCalledTimes(1);
});
