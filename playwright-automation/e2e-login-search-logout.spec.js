import { test, expect } from './base-test';

test('E2E: Login → Search → Logout', async ({ page }) => {

  // Step 1: Open application
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);

  // Step 2: Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 3: Verify inventory page
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Step 4: Search product (filter by text)
  const product = page.locator('.inventory_item')
    .filter({ hasText: 'Backpack' });

  await expect(product).toBeVisible();

  // Step 5: Logout
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // Step 6: Verify logout
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
