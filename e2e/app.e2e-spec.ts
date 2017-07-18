import { UdemyProjectPage } from './app.po';

describe('udemy-project App', () => {
  let page: UdemyProjectPage;

  beforeEach(() => {
    page = new UdemyProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
