import { expect, Page } from '@playwright/test';

export class SharedSelectors {
  constructor(private page: Page) {}

  get carriageNPSIcon() {
    return this.page.getByTestId('rolling_stock_type.nps');
  }

  get carriageMVPSIcon() {
    return this.page.getByTestId('rolling_stock_type.mvps');
  }
  get arrowDropDown() {
    return this.page.getByTestId('autocomplete-railway-administration');
  }

  get carrierDropDown() {
    return this.page.getByTestId('autocomplete-passenger-carrier');
  }

  get branchDropDown() {
    return this.page.getByTestId('autocomplete-branch');
  }

  get subdivDropDawn() {
    return this.page.getByTestId('autocomplete-structural-subdivision');
  }

  get subdivDropDawnMvps() {
    return this.page.getByTestId('autocomplete-mvps-company-affiliation');
  }

  get dimensionDropDawn() {
    return this.page.getByTestId('autocomplete-nps-сarriage-dimension');
  }

  get news() {
    return this.page.getByTestId('main-contentainer').getByTestId('expandNewsButton');
  }

  get carriageIcon() {
    return this.page.getByTestId('ExpandMoreIcon');
  }

  //   gdpDownDropList: this.page.getByRole('button', { name: '- 2027' }),
}
