import { LoginPage } from '../fullpages/LoginPage';
import { expect, Page } from '@playwright/test';
import { testUser } from '../../fixtures/users/auth';

export class AuthFlow {
  private loginPage = new LoginPage(this.page);

  constructor(private page: Page) {}

  async executeAsAdmin() {
    await this.loginPage.navigateLogin();
    await this.loginPage.login(testUser.username, testUser.password);
    await this.loginPage.clickSubmit();
  }

  async otherButtons() {
    await this.loginPage.navigateLogin();
    await this.loginPage.login(testUser.username, testUser.password);
    await this.loginPage.otherButton();
  }

  async errorAuth() {
    await this.loginPage.navigateLogin();
    await this.loginPage.login(testUser.falseName, testUser.falsePswd);
    await this.loginPage.clickSubmit();
    await this.loginPage.getErrorMessageAuth();
  }
}
