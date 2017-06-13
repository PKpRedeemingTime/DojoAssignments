import { AngularPlaygroundPage } from './app.po';

describe('angular-playground App', () => {
  let page: AngularPlaygroundPage;

  beforeEach(() => {
    page = new AngularPlaygroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
