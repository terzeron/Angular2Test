import { HelloModulePage } from './app.po';

describe('hello-module App', () => {
  let page: HelloModulePage;

  beforeEach(() => {
    page = new HelloModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
