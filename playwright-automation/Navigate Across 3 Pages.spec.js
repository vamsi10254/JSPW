import { test, expect } from '@playwright/test';

test('Navigate across multiple pages', async ({ page }) => {

  // Step 1: Open Login Page
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);

  // Step 2: Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 3: Validate Inventory Page
  await page.waitForURL('**/inventory.html');
  await expect(page).toHaveURL(/inventory/);

  // Step 4: Navigate to Cart Page
  await page.getByClass('shopping_cart_link').click();

  // Step 5: Validate Cart Page
  await page.waitForURL('**/cart.html');
  await expect(page).toHaveURL(/cart/);
});
