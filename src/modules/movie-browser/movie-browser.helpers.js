const TMDB_IMAGE_BASE_URL = (width = 300) =>
  `https://image.tmdb.org/t/p/w${width}`;

// Creates and returns movie poster's full path.
export const updateMoviePictureUrls = (movieResult, width = 300) => {
  if (movieResult) {
    return {
      ...movieResult,
      backdrop_path: `${TMDB_IMAGE_BASE_URL(width)}${
        movieResult.backdrop_path
      }`,
      poster_path: `${TMDB_IMAGE_BASE_URL(width)}${movieResult.poster_path}`
    };
  }
  return {};
};

// Transforms API response into array of movies and also, updates the movie poster path
export const getMoviesList = moviesResponse => {
  return !!moviesResponse
    ? [
        ...moviesResponse.results.map(movieResult =>
          updateMoviePictureUrls(movieResult)
        )
      ]
    : null;
};

// Sorts Movies by popularity descding order
export const sortbyPopularity = movies => {
  return movies.sort((m1, m2) => {
    return m2.popularity - m1.popularity;
  });
};

// Given array of selected Genere Filters and movies
// this function checks if the one or more genre selected by user
// is part of movie's genre list?
// if so it will return that movie in the result
export const filterByGenres = (movies, genreFilters) => {
  if (genreFilters && genreFilters.size > 0 && movies) {
    var filteredArray = movies.filter(function(array_el) {
      return (
        [...genreFilters].filter(function(key, value) {
          return array_el.genre_ids.includes(parseInt(key));
        }).length > 0
      );
    });
    return filteredArray;
  }

  return movies;
};

// Check if movie's vote_average is higher or equal to the
// user's selected rating? if so, return that as result
// for e.g. if user selects 'rating=1' ALL/more movies will be selected in the result
// as opposed to rating or 8 or 9
export const filterByRating = (movies, seelctedRating) => {
  if (movies && seelctedRating > 0) {
    const filteredMovies = movies.filter(
      movie => movie.vote_average >= seelctedRating
    );
    return filteredMovies;
  }

  return movies;
};

// Returns the FULL list of Genre's from the network response
// if there is no response, it returns empty array to avoid errors in rendering!
export const getGenresList = genreResponse => {
  return !!genreResponse ? [...genreResponse.genres.map(genre => genre)] : [];
};

// Given a genreId lookup Genere Name from the available list of Genres
// this is used for showing genres as pills on UI
export const getGenreName = (genres, genreId) => {
  const filtered = Object.keys(genres)
    .filter(key => {
      return genres[key].id === genreId;
    })
    .map(key => genres[key].name);
  if (filtered.length && filtered.length > 0) return filtered[0];
  else return genreId;
};
