import {test, expect} from "@playwright/test";

test("follow a user", async ({page}) => {
	await page.goto("/");

	// Follow user of first post in page
	await page.locator("data-testid=list-item-menu-btn").first().click();
	const followButton = page.locator('button:has-text("Follow")');
	const followButtonTextContent = await followButton.textContent();
	const user = followButtonTextContent.split(" ")[1];
	await followButton.click();
	await page.locator('button:has-text("Close")').click();

	await Promise.all([
		page.waitForNavigation(),
		page.locator("text=Following").click(),
	]);

	await expect(page.locator("data-testid=user-following")).toHaveText(
		`${user} Unfollow`,
	);
});
