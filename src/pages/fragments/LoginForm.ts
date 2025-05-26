import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { expect, Page } from '@playwright/test';

export class LoginForm {
  private username = new Input(this.page.getByTestId('userName').locator('Input'));
  private password = new Input(this.page.getByTestId('password').locator('Input'));
  private submit = new Button(this.page.getByTestId('submit'));
  private eye = new Button(this.page.getByTestId('visibility'));
  private LDAP = new Button(
    this.page.getByRole('checkbox', { name: 'Войти как пользователь LDAP' }),
  );
  private openEye = new Button(this.page.getByTestId('VisibilityIcon'));
  private errorAuth = this.page.getByText('Ошибка авторизации');

  constructor(private page: Page) {}

  async fillCredentials(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
  }

  async eyeForm() {
    await this.eye.click();
  }
  async checkBoxLdap() {
    await this.LDAP.click();
  }

  async submitForm() {
    await this.submit.click();
  }

  async openEyeVis() {
    await this.openEye.click();
  }
  async errorAuthVisible() {
    await expect(this.errorAuth).toBeVisible();
    await expect(this.errorAuth).toHaveText('Ошибка авторизации');
  }
}
