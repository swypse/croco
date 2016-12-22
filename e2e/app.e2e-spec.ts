import { CrocoPage } from './app.po';

describe('croco App', function() {
  let page: CrocoPage;

  beforeEach(() => {
    page = new CrocoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
