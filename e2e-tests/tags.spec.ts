import {test, expect} from "@playwright/test";

test("search for tags and navigate to tag pages", async ({page}) => {
	await page.goto("/tags");
	await expect(page.locator("data-testid=tag")).toHaveCount(109);

	// Search for "web"
	await page.locator('[placeholder="Search tag"]').click();
	await page.locator('[placeholder="Search tag"]').fill("web");
	await expect(page.locator("data-testid=tag")).toHaveCount(1);

	// Click on "web" to navigate to its page
	await page.locator("text=web Web development and news").click();
	await expect(page).toHaveURL("/tags/web");
	await expect(page.locator("data-testid=post")).toHaveCount(25);
});

test("search for invalid tags", async ({page}) => {
	await page.goto("/tags");

	// Search for "abc" (invalid tag)
	await page.locator('[placeholder="Search tag"]').click();
	await page.locator('[placeholder="Search tag"]').fill("abc");
	await expect(page.locator("data-testid=tag")).toHaveCount(0);
	await expect(page.locator("text=No search results")).toBeVisible();
});
