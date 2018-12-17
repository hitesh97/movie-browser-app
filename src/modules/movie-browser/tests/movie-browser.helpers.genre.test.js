import * as movieHelpers from '../movie-browser.helpers';

describe('MovieHelper Genre tests', () => {
  const genreList = [
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
  ];
  describe('filterByGenres tests', () => {
    const expectedMovies = [
      {
        adult: false,
        vote_average: 5.7,
        title: 'spiderman',
        overview: 'The film reveals the ...',
        genre_ids: [28, 14, 10402, 878, 10749]
      },
      {
        adult: false,
        vote_average: 6.7,
        title: 'aquaman',
        overview: 'The film reveals the ...',
        genre_ids: [28, 14, 10402, 878, 10749]
      },
      {
        adult: false,
        vote_average: 8,
        title: 'superman',
        overview: 'The film reveals the ...',
        genre_ids: [28, 14, 10402, 878, 10749]
      }
    ];
    const allMovies = [
      ...expectedMovies,
      {
        adult: false,
        vote_average: 4,
        title: 'Antman',
        overview: 'The film reveals the ...',
        genre_ids: [28, 14, 878, 10749]
      }
    ];
    it('returns list of movies that matches one or more selected genres', () => {
      const selectedGenre = new Map();
      selectedGenre.set('10402', true);
      selectedGenre.set('10409', true);

      const result = movieHelpers.filterByGenres(allMovies, selectedGenre);
      expect(result).toEqual(expectedMovies);
    });
    it('returns ALL movies When user has not selected any genres to filter', () => {
      const selectedGenre = new Map();

      const result = movieHelpers.filterByGenres(allMovies, selectedGenre);
      expect(result).toEqual(allMovies);
    });
  });

  describe('getGenresList tests', () => {
    it('returns genre list array from API response object', () => {
      const result = movieHelpers.getGenresList({ genres: genreList });
      expect(result).toEqual(genreList);
    });
    it('returns EMPTY genre list array When API response is null', () => {
      const result = movieHelpers.getGenresList(null);
      expect(result).toEqual([]);
    });
  });

  describe('Get Genrename tests', () => {
    it('returns genre name', () => {
      const genereName = movieHelpers.getGenreName(genreList, 37);

      expect(genereName).toBe('My Action Genre');
    });

    it('returns genre Id When No matching Genre found', () => {
      const genereName = movieHelpers.getGenreName(genreList, 9999);

      expect(genereName).toBe(9999);
    });
  });
});
