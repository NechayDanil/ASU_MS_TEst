import { expect, test } from '@playwright/test';
import { AuthFlow } from '../../pages/flows/AuthFlow';
import { SharedSelectors } from '../../pages/components/CommonElement';
import { carriageAddFlow } from '../../pages/flows/CarriageFlows/addCarriageflow';

test('Админ входит в систему', async ({ page }) => {
  const entry = new AuthFlow(page);
  const iconsNews = new SharedSelectors(page);
  const carriageFlow = new carriageAddFlow(page);
  await entry.executeAsAdmin();
  await expect(page).toHaveURL('/');
  await expect(iconsNews.news).toBeVisible();
  await carriageFlow.addCariageNPS();
});

test('Проверка иных кнопок формы', async ({ page }) => {
  const checkButton = new AuthFlow(page);
  await checkButton.otherButtons();
});

test('Ошибка входа не существующего пользователя', async ({ page }) => {
  const checkError = new AuthFlow(page);
  await checkError.errorAuth();
});
