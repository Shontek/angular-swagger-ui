import { AngularSwaggerUiPage } from './app.po';

describe('angular-swagger-ui App', () => {
  let page: AngularSwaggerUiPage;

  beforeEach(() => {
    page = new AngularSwaggerUiPage();
  });

  it('should display swagger title', () => {
    page.navigateTo();
    expect(page.getSwaggerTitleText()).toEqual('Angular Swagger UI');
  });
});
