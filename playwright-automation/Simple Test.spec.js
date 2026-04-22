import { test, expect } from '@playwright/test';

test('Validate Google page title', async ({ page }) => {
  // Step 1: Open Google
  await page.goto('https://www.google.com');

  // Step 2: Get page title
  const title = await page.title();

  // Step 3: Validate title
  expect(title).toContain('Google');
});


