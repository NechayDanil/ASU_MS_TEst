import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { SharedSelectors } from '../../components/CommonElement';
import { Page, expect } from '@playwright/test';

export class addCariage {
  private shared = new SharedSelectors(this.page);
  constructor(private page: Page) {}

  private createCarriage = new Button(this.page.getByTestId('saveWagonGroup'));
  private nameCariage = new Input(this.page.getByTestId('name').locator('input'));
  private arrowDropDown = new Input(this.shared.arrowDropDown);
  private carrierDropDown = new Input(this.shared.carrierDropDown);
  private branchDropDown = new Input(this.shared.branchDropDown);
  private subdivDropDawn = new Input(this.shared.subdivDropDawn);
  private subdivDropDawnMvps = new Input(this.shared.subdivDropDawnMvps);
  private NPSButton = new Button(this.shared.carriageNPSIcon);
  private MVPSButton = new Button(this.shared.carriageMVPSIcon);

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
