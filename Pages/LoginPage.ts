import { Page } from '@playwright/test';
import { LoginLocators } from './LoginPage.locators';

// Login page updated for login-tests branch


 export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.locator(LoginLocators.username).fill(username);
    await this.page.locator(LoginLocators.password).fill(password);
    await this.page.locator(LoginLocators.loginBtn).click();
  }
}
