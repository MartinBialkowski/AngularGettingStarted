import { TutorialAngularPage } from './app.po';

describe('tutorial-angular App', function() {
  let page: TutorialAngularPage;

  beforeEach(() => {
    page = new TutorialAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
