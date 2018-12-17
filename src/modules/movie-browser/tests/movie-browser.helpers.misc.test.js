import * as movieHelpers from '../movie-browser.helpers';

describe('MovieHelper All Other tests', () => {
  describe('sortbyPopularity tests', () => {
    //ordered by popularity movies
    const expectedMovies = [
      {
        adult: false,
        vote_average: 5.7,
        title: 'spiderman',
        overview: 'The film reveals the ...',
        popularity: 4
      },
      {
        adult: false,
        vote_average: 6.7,
        title: 'aquaman',
        overview: 'The film reveals the ...',
        popularity: 3
      },
      {
        adult: false,
        vote_average: 8,
        title: 'superman',
        overview: 'The film reveals the ...',
        popularity: 2
      }
    ];
    //un-ordered movies list
    const allMovies = [
      {
        adult: false,
        vote_average: 8,
        title: 'superman',
        overview: 'The film reveals the ...',
        popularity: 2
      },
      {
        adult: false,
        vote_average: 6.7,
        title: 'aquaman',
        overview: 'The film reveals the ...',
        popularity: 3
      },
      {
        adult: false,
        vote_average: 5.7,
        title: 'spiderman',
        overview: 'The film reveals the ...',
        popularity: 4
      }
    ];
    it('returns list of movies ordered by popularity', () => {
      const result = movieHelpers.sortbyPopularity(allMovies);
      expect(result).toEqual(expectedMovies);
    });
  });

  describe('updateMoviePictureUrls test', () => {
    const expectedMovies = {
      adult: false,
      vote_average: 5.7,
      title: 'spiderman',
      overview: 'The film reveals the ...',
      popularity: 4,
      backdrop_path: 'https://image.tmdb.org/t/p/w400/backdrop.jpg',
      poster_path: 'https://image.tmdb.org/t/p/w400/poster.jpg'
    };

    const allMovies = {
      adult: false,
      vote_average: 5.7,
      title: 'spiderman',
      overview: 'The film reveals the ...',
      popularity: 4,
      backdrop_path: '/backdrop.jpg',
      poster_path: '/poster.jpg'
    };
    it('returns updated backdrop path and poster path', () => {
      const result = movieHelpers.updateMoviePictureUrls(allMovies, 400);
      expect(result).toEqual(expectedMovies);
    });
  });

  describe('getMoviesList test', () => {
    const expectedMovies = [
      {
        adult: false,
        vote_average: 5.7,
        title: 'spiderman',
        overview: 'The film reveals the ...',
        popularity: 4,
        backdrop_path: 'https://image.tmdb.org/t/p/w300/backdrop.jpg',
        poster_path: 'https://image.tmdb.org/t/p/w300/poster.jpg'
      }
    ];
    const allMovies = {
      results: [
        {
          adult: false,
          vote_average: 5.7,
          title: 'spiderman',
          overview: 'The film reveals the ...',
          popularity: 4,
          backdrop_path: '/backdrop.jpg',
          poster_path: '/poster.jpg'
        }
      ]
    };
    it('returns list of moves from API response with updated backdrop path and poster path', () => {
      const result = movieHelpers.getMoviesList(allMovies);
      expect(result).toEqual(expectedMovies);
    });
  });
});
