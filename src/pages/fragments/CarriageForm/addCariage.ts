import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { SharedSelectors } from '../../components/CommonElement';
import { Page, expect } from '@playwright/test';

export class addCariage {
  private shared = new SharedSelectors(this.page);
  constructor(private page: Page) {}

  private addInput = new Button(this.page.getByTestId('carriageGroupList.add'));
  private createCarriage = new Button(this.page.getByTestId('saveWagonGroup'));
  private nameCariage = new Input(this.page.getByTestId('name').locator('input'));
  private arrowDropDown = new Input(this.page.getByTestId('autocomplete-railway-administration'));
  private carrierDropDown = new Input(this.page.getByTestId('autocomplete-passenger-carrier'));
  private branchDropDown = new Input(this.page.getByTestId('autocomplete-branch'));
  private subdivDropDawn = new Input(this.page.getByTestId('autocomplete-structural-subdivision'));
  private subdivDropDawnMvps = new Input(
    this.page.getByTestId('autocomplete-mvps-company-affiliation'),
  );
  private NPSButton = new Button(this.shared.carriageNPSIcon);
  private MVPSButton = new Button(this.shared.carriageMVPSIcon);

  async clickInputAdd() {
    await this.addInput.click();
  }

  async arrow(name: string) {
    await this.arrowDropDown.selectInstOption(name);
  }

  async carrier(name: string) {
    await this.carrierDropDown.selectOption(name);
  }

  async branch(name: string) {
    await this.branchDropDown.selectOption(name);
  }

  async subdiv(name: string) {
    await this.subdivDropDawn.selectSegmentOption(name);
  }

  async subdivMVPS(name: string) {
    await this.subdivDropDawnMvps.selectOption(name);
  }

  async addName(name: string) {
    await this.nameCariage.fill(name);
  }

  async selectNPS() {
    await this.NPSButton.click();
  }

  async selectMVPS() {
    await this.MVPSButton.click();
  }

  async create() {
    await this.createCarriage.click();
  }
}
