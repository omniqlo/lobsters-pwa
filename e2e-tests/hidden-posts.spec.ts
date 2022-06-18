import {test, expect} from "@playwright/test";

test("hide a post", async ({page}) => {
	await page.goto("/");

	// Hide first post in page
	const firstPostTextContent = await page
		.locator("data-testid=post-title")
		.first()
		.textContent();
	await page.locator("data-testid=list-item-menu-btn").first().click();
	await page.locator('button:has-text("Hide Post")').click();
	await page.locator('button:has-text("Close")').click();

	await Promise.all([
		page.waitForNavigation(),
		page.locator("text=Settings").click(),
	]);

	await Promise.all([
		page.waitForNavigation(),
		page.locator('a:has-text("Hidden Posts")').click(),
	]);

	await expect(page.locator("data-testid=post-title")).toHaveText(
		firstPostTextContent,
	);
});
