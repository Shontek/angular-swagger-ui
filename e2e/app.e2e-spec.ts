import { AngularSwaggerUiPage } from './app.po';

describe('angular-swagger-ui App', () => {
  let page: AngularSwaggerUiPage;

  beforeEach(() => {
    page = new AngularSwaggerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
