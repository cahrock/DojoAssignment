import { BarCodeGeneratorPage } from './app.po';

describe('bar-code-generator App', () => {
  let page: BarCodeGeneratorPage;

  beforeEach(() => {
    page = new BarCodeGeneratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
