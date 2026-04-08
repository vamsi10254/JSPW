import { test, expect } from  './base-test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';

test('Complete E2E flow: Login → Inventory → Logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.verifyPageLoaded();

  await inventoryPage.logout();
  await expect(page).toHaveURL(/saucedemo/);
});
