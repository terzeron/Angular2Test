import { browser, element, by } from 'protractor';

export class Nested.Component.04Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
