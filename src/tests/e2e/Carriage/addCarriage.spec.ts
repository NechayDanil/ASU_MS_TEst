import { expect, test } from '@playwright/test';
import { AuthFlow } from '../../../pages/flows/AuthFlow';
import { carriageAddFlow } from '../../../pages/flows/CarriageFlows/addCarriageflow';

test('Добавление группы NPS', async ({ page }) => {
  const entry = new AuthFlow(page);
  const createNPS = new carriageAddFlow(page);
  await entry.executeAsAdmin();
  await expect(page).toHaveURL('/');
  await createNPS.addCariageNPS();
});

test('Добавление группы MVPS', async ({ page }) => {
  const entry = new AuthFlow(page);
  const createMVPS = new carriageAddFlow(page);
  await entry.executeAsAdmin();
  await expect(page).toHaveURL('/');
  await createMVPS.addCarriageMVPS();
});
