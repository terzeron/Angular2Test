import { OopservicePage } from './app.po';

describe('oopservice App', () => {
  let page: OopservicePage;

  beforeEach(() => {
    page = new OopservicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
