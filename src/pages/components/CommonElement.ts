import { expect, Page } from '@playwright/test';

export class SharedSelectors {
  constructor(private page: Page) {}

  icons = {
    news: this.page.getByTestId('main-contentainer').getByTestId('expandNewsButton'),
    carriageIcon: this.page.getByTestId('ExpandMoreIcon'),
  };
  buttons = {
    carriageNPSIcon: this.page.getByTestId('rolling_stock_type.nps'),

    carriageMVPSIcon: this.page.getByTestId('rolling_stock_type.mvps'),
    gdpDownDropList: this.page.getByRole('button', { name: '- 2027' }),
  };
}
