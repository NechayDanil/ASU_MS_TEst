import { URLs } from '../../../URLs.env';
import { expect, Page } from '@playwright/test';

export class Navigator {
  constructor(private readonly page: Page) {}

  async goTo(urlKey: keyof typeof URLs) {
    const path = URLs[urlKey];
    await this.page.goto(path);
    await this.expectUrlToBe(urlKey);
  }

  async expectUrlToBe(urlKey: keyof typeof URLs) {
    const expectedPath = URLs[urlKey];
    await expect(this.page).toHaveURL(new RegExp(`${expectedPath}(?:\\?|$)`));
  }
}
