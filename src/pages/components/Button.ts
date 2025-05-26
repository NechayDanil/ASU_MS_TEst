import { expect, Locator, Page } from '@playwright/test';

export class Button {
  constructor(private locator: Locator) {}

  // Метот для проверки видимости элемента и клик по нему
  async click() {
    await expect(this.locator).toBeVisible();
    await this.locator.click();
  }
}
