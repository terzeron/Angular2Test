import { MockobjservicePage } from './app.po';

describe('mockobjservice App', () => {
  let page: MockobjservicePage;

  beforeEach(() => {
    page = new MockobjservicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
