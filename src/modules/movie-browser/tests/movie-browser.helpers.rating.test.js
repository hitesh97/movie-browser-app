import * as movieHelpers from '../movie-browser.helpers';

describe('MovieHelper rating tests', () => {
  describe('filterByRating tests', () => {
    const expectedMovies = [
      {
        adult: false,
        vote_average: 5.7,
        title: 'spiderman',
        overview: 'The film reveals the ...'
      },
      {
        adult: false,
        vote_average: 6.7,
        title: 'aquaman',
        overview: 'The film reveals the ...'
      },
      {
        adult: false,
        vote_average: 8,
        title: 'superman',
        overview: 'The film reveals the ...'
      }
    ];
    const allMovies = [
      ...expectedMovies,
      {
        adult: false,
        vote_average: 4,
        title: 'Antman',
        overview: 'The film reveals the ...'
      }
    ];
    it('returns list of movies above selected rating', () => {
      const selectedRating = 5.5;

      const result = movieHelpers.filterByRating(allMovies, selectedRating);
      expect(result).toEqual(expectedMovies);
    });
    it('returns ALL movies When selected rating is 0 or less', () => {
      // user selected 0 rating somehow!
      let seelctedRating = 0;

      let result = movieHelpers.filterByRating(allMovies, seelctedRating);
      expect(result).toEqual(allMovies);

      // user selected 'first option' 'select' from dropdown
      seelctedRating = -1;

      result = movieHelpers.filterByRating(allMovies, seelctedRating);
      expect(result).toEqual(allMovies);
    });
  });
});
