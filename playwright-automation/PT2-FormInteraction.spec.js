import { test, expect } from '@playwright/test';

test('Login and validate dashboard URL - SauceDemo', async ({ page }) => {

  // Step 1: Open login page
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Enter username
  await page.getByPlaceholder('Username').fill('standard_user');

  // Step 3: Enter password
  await page.getByPlaceholder('Password').fill('secret_sauce');

  // Step 4: Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 5: Validate dashboard URL
  await expect(page).toHaveURL(/inventory\.html/);

});
