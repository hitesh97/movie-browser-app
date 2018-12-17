import { combineReducers } from 'redux';
import { createReducer, createAsyncReducer } from '../common/redux.helpers';
import { keys as movieActionKeys } from './movie-browser.actions';

// Very Important: Include the existing movies in the returned result
// so that we can show new and old movies as user scroll's down on UI!

// This will create a new state with both the existing
// movies and new pages of movies
const moviesSuccessReducer = (state, action) => {
  const existingMovies = state.response ? state.response.results : [];
  // Create a new state object to be returned
  // When creating the new state, be sure to include any
  // existing properties we want to persist
  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response,
      results: [...existingMovies, ...action.response.results]
    }
  };
};

// Return new state of GenreList found from network request
export const GenreListSuccessReducer = (state, action) => {
  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response
    }
  };
};

// return updated state with selected Genres from user
const filterByGenresReducer = createReducer(
  { selectedGenres: undefined },
  {
    [movieActionKeys.FILTER_BY_GENRE]: (state, action) => {
      return {
        selectedGenres: action.selectedGenres
      };
    }
  }
);

// return updated state with selected Rating filter from user
const filterByRatingReducer = createReducer(
  { selectedRating: undefined },
  {
    [movieActionKeys.FILTER_BY_RATING]: (state, action) => {
      return {
        selectedRating: action.selectedRating
      };
    }
  }
);

// Combines our movie browser related reducers to build our movieBrowser reducer
const movieBrowserReducer = combineReducers({
  nowPlaying: createAsyncReducer(movieActionKeys.GET_NOW_PLAYING, {
    [`${movieActionKeys.GET_NOW_PLAYING}_SUCCESS`]: moviesSuccessReducer
  }),
  movieDetails: createAsyncReducer(movieActionKeys.GET_MOVIE_DETAILS),
  genreList: createAsyncReducer(movieActionKeys.GET_GENRE_LIST, {
    [`${movieActionKeys.GET_GENRE_LIST}_SUCCESS`]: GenreListSuccessReducer
  }),
  genreFilters: filterByGenresReducer,
  ratingFilter: filterByRatingReducer
});

export default movieBrowserReducer;
