import { NgmodalPage } from './app.po';

describe('ngmodal App', () => {
  let page: NgmodalPage;

  beforeEach(() => {
    page = new NgmodalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
