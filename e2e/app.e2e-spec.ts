import { LeagueAppPage } from './app.po';

describe('league-app App', () => {
  let page: LeagueAppPage;

  beforeEach(() => {
    page = new LeagueAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
