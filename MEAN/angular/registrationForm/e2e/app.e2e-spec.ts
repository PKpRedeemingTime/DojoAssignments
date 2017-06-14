import { RegistrationFormPage } from './app.po';

describe('registration-form App', () => {
  let page: RegistrationFormPage;

  beforeEach(() => {
    page = new RegistrationFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
