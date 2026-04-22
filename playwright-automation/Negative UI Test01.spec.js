import { test, expect } from './base-test';

test('Negative UI Test - Submit login with empty fields', async ({ page }) => {

  // Step 1: Open login page
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Click Login button without entering username & password
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 3: Verify error message is displayed
  const errorMessage = page.locator('h3[data-test="error"]');

  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText('Epic sadface: Username is required');

});
