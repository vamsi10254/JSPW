import { test, expect } from '@playwright/test';

test('Wait for error message and assert text', async ({ page }) => {

  // Step 1: Open login page
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Click Login without entering data
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 3: Wait for error message
  await page.waitForSelector('h3[data-test="error"]');

  // Step 4: Assert error text
  await expect(
    page.locator('h3[data-test="error"]')
  ).toContainText('Username is required');
});
