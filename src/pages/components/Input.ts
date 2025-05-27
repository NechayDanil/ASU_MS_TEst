import { expect, Locator, Page } from 'playwright/test';

export class Input {
  constructor(private locator: Locator) {}

  // Метод для полей принимающие стринговые значения, написание в полыях и проверка ,что текст в поле
  async fill(value: string) {
    await this.locator.fill(value);
    await expect(this.locator).toHaveValue(value);
  }

  async selectOption(optionText: string) {
    // Кликаем выпадайку ждем список
    await this.locator.getByRole('button', { name: 'Открыть' }).click();
    await expect(this.locator.locator('[role="combobox"]')).toBeVisible({ timeout: 5000 });
    // Фильтруем опции (добавляем ввод текста)
    await this.locator.locator('input.MuiAutocomplete-input').fill(optionText);
    await this.locator.page().waitForTimeout(300); // Небольшая пауза для обновления
    // Ищем и кликаем опцию
    await this.locator.page().getByRole('option', { name: optionText }).click();
    // Проверяем результат
    await expect(this.locator.locator('input.MuiAutocomplete-input')).toHaveValue(optionText);
  }

  // Метод для открытия выпадайки которая уже имеет предустановленные значения,выбора написанной опции и проверка, что она установилась
  async selectInstOption(optionText: string) {
    // Кликаем выпадайку ждем список
    await this.locator.getByRole('button', { name: 'Открыть' }).click();
    await expect(this.locator.locator('[role="combobox"]')).toBeVisible({ timeout: 5000 });
    // Фильтруем опции (добавляем ввод текста)
    await this.locator.locator('input.MuiAutocomplete-input').fill(optionText);
    await this.locator.page().waitForTimeout(300); // Небольшая пауза для обновления
    // Ищем и кликаем опцию
    await this.locator.page().getByRole('option', { name: optionText }).first().click();
    // Проверяем результат
    await expect(this.locator.locator('input.MuiAutocomplete-input')).toHaveValue(optionText);
  }

  // Метод который проверяет часть опции (сделано специально для создания ГВ выпадайки предприятие)
  async selectSegmentOption(partialText: string) {
    await this.locator.getByRole('button', { name: 'Открыть' }).click();
    await expect(this.locator.locator('[role="combobox"]')).toBeVisible({ timeout: 5000 });
    // Ищем опцию по частичному совпадению (регулярное выражение)
    const option = this.locator
      .page()
      .getByRole('option')
      .filter({ hasText: new RegExp(`^${partialText}`) }) // Ищем начало строки
      .first();
    await option.click();
    // Проверяем результат (тоже по частичному совпадению)
    await expect(this.locator.locator('input.MuiAutocomplete-input')).toHaveValue(
      new RegExp(`^${partialText}`),
    );
  }
}
