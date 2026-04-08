import { test, expect } from "@playwright/test";

test("Login using CSS selectors", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('h3[data-test="error"]')).toContainText(
    "Username is required"
  );
});
