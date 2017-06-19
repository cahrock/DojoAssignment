import { BoilerTemplateAppPage } from './app.po';

describe('boiler-template-app App', () => {
  let page: BoilerTemplateAppPage;

  beforeEach(() => {
    page = new BoilerTemplateAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
