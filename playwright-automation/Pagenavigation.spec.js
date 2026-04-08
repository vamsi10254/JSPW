import { test, expect } from '@playwright/test';

test('Practice 1 - 2 Page Navigation', async ({ page }) => {

  // Step 1: Open SauceDemo login page
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Enter username
  await page.getByPlaceholder('Username').fill('standard_user');

  // Step 3: Enter password
  await page.getByPlaceholder('Password').fill('secret_sauce');

  // Step 4: Click Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 5: Verify Inventory page URL
  await expect(page).toHaveURL(/inventory\.html/);

});
