import { addCariageForm } from '../../fullpages/CarriagePage/addCarriagePage';
import { expect, Page } from '@playwright/test';
import { addEmptygroup } from '../../../fixtures/carriageGroup/addCariage';

export class carriageAddFlow {
  private addPageCariage = new addCariageForm(this.page);
  constructor(private page: Page) {}

  async addCariageNPS() {
    await this.addPageCariage.openCarriageList();
    await this.addPageCariage.addClick();
    await this.addPageCariage.fillName(addEmptygroup.name);
    await this.addPageCariage.arrowDown(addEmptygroup.railwayAdministration);
    await this.addPageCariage.carrierDown(addEmptygroup.passengerCarriers);
    await this.addPageCariage.branchDown(addEmptygroup.autocompleteBranch);
    await this.addPageCariage.subdivDown(addEmptygroup.structuralSubdivision);
    await this.addPageCariage.createButton();
  }

  async addCarriageMVPS() {
    await this.addPageCariage.openCarriageList();
    await this.addPageCariage.addClick();
    await this.addPageCariage.clickMVPS();
    await this.addPageCariage.fillName(addEmptygroup.nameMVPS);
    await this.addPageCariage.arrowDown(addEmptygroup.railwayAdministration);
    await this.addPageCariage.carrierDown(addEmptygroup.passengerCarriers);
    await this.addPageCariage.branchDown(addEmptygroup.autocompleteBranch);
    await this.addPageCariage.subdivDownMVPS(addEmptygroup.subdivision);
    await this.addPageCariage.createButton();
  }
}
