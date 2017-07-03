import { Angular2DiPage } from './app.po';

describe('angular2-di App', () => {
  let page: Angular2DiPage;

  beforeEach(() => {
    page = new Angular2DiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
