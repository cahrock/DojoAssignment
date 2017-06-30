import { MongooseAngularPage } from './app.po';

describe('mongoose-angular App', () => {
  let page: MongooseAngularPage;

  beforeEach(() => {
    page = new MongooseAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
