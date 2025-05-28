import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { SharedSelectors } from '../../components/CommonElement';
import { Page, expect } from '@playwright/test';

export class cariageList {
  private shared = new SharedSelectors(this.page);
  constructor(private page: Page) {}

  private addInput = new Button(this.page.getByTestId('carriageGroupList.add'));
  private nameCGInput = new Input(this.page.getByRole('textbox', { name: 'Наименование' }));
  private numbersTrainsInput = new Input(this.page.getByRole('textbox', { name: '№№ поездов' }));
  private routInput = new Input(this.page.getByRole('textbox', { name: 'Маршрут' }));
  private arrowDropDown = new Input(this.shared.arrowDropDown);
  private carrierDropDown = new Input(this.shared.carrierDropDown);
  private branchDropDown = new Input(this.shared.branchDropDown);
  private subdivDropDawn = new Input(this.shared.subdivDropDawn);
  private homeStationInput = new Input(
    this.page.getByRole('textbox', { name: 'Станция приписки' }),
  );
  private dimensionsDropDawn = new Input(this.shared.dimensionDropDawn);

  async clickInputAdd() {
    await this.addInput.click();
  }

  async nameCG(name: string) {
    await this.nameCGInput.fill(name);
  }

  async numbersTrains(name: string) {
    await this.numbersTrainsInput.fill(name);
  }

  async rout(name: string) {
    await this.routInput.fill(name);
  }
  async arrow(name: string) {
    await this.arrowDropDown.fill(name);
  }

  async carriage(name: string) {
    await this.carrierDropDown.fill(name);
  }
  async branch(name: string) {
    await this.branchDropDown.fill(name);
  }

  async subdiv(name: string) {
    await this.subdivDropDawn.fill(name);
  }

  async homeStation(name: string) {
    await this.homeStationInput.fill(name);
  }

  async dimensions(name: string) {
    await this.dimensionsDropDawn.fill(name);
  }
}
