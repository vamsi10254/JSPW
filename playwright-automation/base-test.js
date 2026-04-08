import { test as base, expect} from '@playwright/test';
import fs from 'fs';
import path from 'path';

export const test = base.extend({});
export { expect };

test.afterEach(async ({ page }, testInfo) => {

  const status = testInfo.status; // passed | failed
  const testName = testInfo.title.replace(/[^a-zA-Z0-9]/g, '_');

  // Environment name (default: local)
  const env = process.env.TEST_ENV || 'local';

  // Timestamp
  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, '-');

  const folderPath = `screenshots/${env}/${status}`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const screenshotPath =
    `${folderPath}/${testName}_${env}_${timestamp}.png`;

  // Take screenshot
  await page.screenshot({
    path: screenshotPath,
    fullPage: true
  });

  // Attach screenshot to HTML report
  await testInfo.attach('Screenshot', {
    // path: screenshotPath,
    body: await fs.promises.readFile(screenshotPath),
    contentType: 'image/png'
  });
});
