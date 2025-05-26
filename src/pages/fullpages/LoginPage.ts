import { LoginForm } from '../fragments/LoginForm';
import { Page } from '@playwright/test';

export class LoginPage {
  private form = new LoginForm(this.page);
  constructor(private page: Page) {}

  async navigateLogin() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.form.fillCredentials(username, password);
  }

  async clickSubmit() {
    await this.form.submitForm();
  }

  async otherButton() {
    await this.form.eyeForm();
    await this.form.checkBoxLdap();
    await this.form.openEyeVis();
  }

  async getErrorMessageAuth() {
    await this.form.errorAuthVisible();
  }
}
