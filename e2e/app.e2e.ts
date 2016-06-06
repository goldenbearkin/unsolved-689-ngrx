import { Unsolved689NgrxPage } from './app.po';

describe('unsolved-689-ngrx App', function() {
  let page: Unsolved689NgrxPage;

  beforeEach(() => {
    page = new Unsolved689NgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('unsolved-689-ngrx works!');
  });
});
