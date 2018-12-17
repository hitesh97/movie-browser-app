import * as movieBrowserReducer from '../movie-browser.reducers';

describe('movie-browser reducers tests', () => {
  it('GenreListSuccessReducer test', () => {
    const previousState = {};
    const expectedResponse = {
      genreList: [
        {
          id: 28,
          name: 'Action'
        },
        {
          id: 12,
          name: 'Adventure'
        },
        {
          id: 53,
          name: 'Thriller'
        },
        {
          id: 10752,
          name: 'War'
        },
        {
          id: 37,
          name: 'My Action Genre'
        }
      ]
    };
    const expectedState = { isLoading: false, response: expectedResponse };
    const action = { response: expectedResponse };
    const resultState = movieBrowserReducer.GenreListSuccessReducer(
      previousState,
      action
    );
    expect(resultState).toEqual(expectedState);
  });
});
