import { test, expect } from './base-test';

test('Try-catch basic error handling', async ({ page }) => {
  try {
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('button', { name: 'Login' }).click();

    // Intentionally wrong text to cause failure
    await expect(
      page.locator('[data-test="error"]')
    ).toHaveText('Wrong error message');

  } catch (error) {
    console.log(' Test failed due to error:', error.message);
    throw error; // IMPORTANT: rethrow to mark test as failed
  }
});
