export class Unsolved689NgrxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('unsolved-689-ngrx-app h1')).getText();
  }
}
