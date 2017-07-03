import { Nested.Component.04Page } from './app.po';

describe('nested.component.04 App', () => {
  let page: Nested.Component.04Page;

  beforeEach(() => {
    page = new Nested.Component.04Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
