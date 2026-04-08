import { test, expect } from './base-test';

test('Practice 2 - 3 Page Navigation', async ({ page }) => {

  // Step 1: Open SauceDemo login page
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 3: Verify Inventory page
  await expect(page).toHaveURL(/inventory\.html/);

  // Step 4: Navigate to Cart page
  await page.locator('.shopping_cart_link').click();

  // Step 5: Verify Cart page URL
  await expect(page).toHaveURL(/cart\.html/);

  // Step 6: Go back to Inventory page
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  // Step 7: Verify Inventory page again
  await expect(page).toHaveURL(/inventory\.html/);

});
