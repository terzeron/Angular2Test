import { HelloservicePage } from './app.po';

describe('helloservice App', () => {
  let page: HelloservicePage;

  beforeEach(() => {
    page = new HelloservicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
