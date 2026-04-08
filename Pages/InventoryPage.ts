import { Page, expect } from '@playwright/test';
import { InventoryLocators } from './InventoryPage.locators';

export class InventoryPage {
  constructor(private page: Page) {}

  async verifyPageLoaded() {
    await expect(this.page.locator(InventoryLocators.title))
      .toHaveText('Products');
  }

  async logout() {
    await this.page.locator(InventoryLocators.menuBtn).click();
    await this.page.locator(InventoryLocators.logoutLink).click();
  }
}
