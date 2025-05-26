import { Page } from 'playwright-core';
import { addCariage } from '../../fragments/CarriageForm/addCariage';
import { Navigator } from '../../../core/utils/navigation';

export class addCariageForm {
  private readonly navigator: Navigator;
  private formaCarriage = new addCariage(this.page);

  constructor(private readonly page: Page) {
    this.navigator = new Navigator(page);
  }

  async addClick() {
    await this.formaCarriage.clickInputAdd();
  }

  async clickNPS() {
    await this.formaCarriage.selectNPS();
  }

  async clickMVPS() {
    await this.formaCarriage.selectMVPS();
  }

  async arrowDown(name: string) {
    await this.formaCarriage.arrow(name);
  }

  async fillName(name: string) {
    await this.formaCarriage.addName(name);
  }

  async carrierDown(name: string) {
    await this.formaCarriage.carrier(name);
  }

  async branchDown(name: string) {
    await this.formaCarriage.branch(name);
  }

  async subdivDown(name: string) {
    await this.formaCarriage.subdiv(name);
  }

  async subdivDownMVPS(name: string) {
    await this.formaCarriage.subdivMVPS(name);
  }

  async createButton() {
    await this.formaCarriage.create();
  }

  async openCarriageList() {
    // 1. Переход по URL
    await this.navigator.goTo('CARRIAGE_PLANNING');

    // 2. Проверка что URL корректный
    await this.navigator.expectUrlToBe('CARRIAGE_PLANNING');
  }
}
