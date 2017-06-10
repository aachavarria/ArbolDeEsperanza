import { AdeAppPage } from './app.po';

describe('ade-app App', () => {
  let page: AdeAppPage;

  beforeEach(() => {
    page = new AdeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
