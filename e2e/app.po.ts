import { browser, element, by } from 'protractor';

export class AngularSwaggerUiPage {

  navigateTo() {
    return browser.get('/');
  }

  getSwaggerTitleText() {
    return element(by.css('swagger-info h1')).getText();
  }
}
