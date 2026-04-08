import { test, expect } from '@playwright/test';

test('Practice 3 - Assertion Practice', async ({ page }) => {

  // Step 1: Open SauceDemo login page
  await page.goto('https://www.saucedemo.com/');

  // Assertion 1: Verify Login page title
  await expect(page).toHaveTitle('Swag Labs');

  // Step 2: Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Assertion 2: Verify Inventory page URL
  await expect(page).toHaveURL(/inventory\.html/);

  // Step 3: Navigate to Cart page
  await page.locator('.shopping_cart_link').click();

  // Assertion 3: Verify Cart page URL
  await expect(page).toHaveURL(/cart\.html/);

  // Step 4: Navigate back to Inventory page
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  // Assertion 4: Verify Inventory page URL again
  await expect(page).toHaveURL(/inventory\.html/);

});

