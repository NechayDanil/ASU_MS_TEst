import { expect, Page } from '@playwright/test';

export class SharedSelectors {
  constructor(private page: Page) {}

  get carriageNPSIcon() {
    return this.page.getByTestId('rolling_stock_type.nps');
  }

  get carriageMVPSIcon() {
    return this.page.getByTestId('rolling_stock_type.mvps');
  }

  get news() {
    return this.page.getByTestId('main-contentainer').getByTestId('expandNewsButton');
  }

  get carriageIcon() {
    return this.page.getByTestId('ExpandMoreIcon');
  }

  //   gdpDownDropList: this.page.getByRole('button', { name: '- 2027' }),
}
