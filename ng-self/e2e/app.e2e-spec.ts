import { NgSelfPage } from './app.po';

describe('ng-self App', () => {
  let page: NgSelfPage;

  beforeEach(() => {
    page = new NgSelfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
