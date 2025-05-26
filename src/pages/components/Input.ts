import { expect, Locator, Page } from 'playwright/test';

export class Input {
  constructor(private locator: Locator) {}

  // Метод для полей принимающие стринговые значения, написание в полыях и проверка ,что текст в поле
  async fill(value: string) {
    await this.locator.fill(value);
    await expect(this.locator).toHaveValue(value);
  }

  // Метод для открытия выпадайки ,выбора написанной опции и проверка, что она установилась
  async selectOption(optionText: string) {
    // Кликаем выпадайку ждем список
    await this.locator.getByRole('button', { name: 'Открыть' }).click();
    await expect(this.locator.locator('[role="combobox"]')).toBeVisible({ timeout: 5000 });

    // Ищем и кликаем опцию
    await this.locator.page().getByRole('option', { name: optionText }).click();

    // Проверяем результат
    await expect(this.locator.locator('input.MuiAutocomplete-input')).toHaveValue(optionText);
  }
}
