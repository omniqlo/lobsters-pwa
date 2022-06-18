import {test, expect} from "@playwright/test";

test("show posts", async ({page}) => {
	await page.goto("/");
	await expect(page.locator("data-testid=post")).toHaveCount(25);

	// Click "Active"
	await page.locator("text=Active").click();
	await expect(page).toHaveURL("/?type=active");
	await expect(page.locator("data-testid=post")).toHaveCount(25);

	// Click "Newest"
	await page.locator("text=Newest").click();
	await expect(page).toHaveURL("/?type=newest");
	await expect(page.locator("data-testid=post")).toHaveCount(25);
});

test("show more posts", async ({page}) => {
	await page.goto("/");

	// Click "Show more posts"
	await page.locator("text=Show more posts").click();
	await expect(page.locator("text=Loading...")).toBeVisible();
	await expect(page.locator("data-testid=post")).toHaveCount(50);
});
