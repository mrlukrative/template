import { ThirdshelfWebPaymentPage } from './app.po';

describe('thirdshelf-web-payment App', () => {
  let page: ThirdshelfWebPaymentPage;

  beforeEach(() => {
    page = new ThirdshelfWebPaymentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
