import { AngularFolderPage } from './app.po';

describe('angular-folder App', () => {
  let page: AngularFolderPage;

  beforeEach(() => {
    page = new AngularFolderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
