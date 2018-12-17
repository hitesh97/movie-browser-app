import { createAsyncActionCreator } from '../common/redux.helpers';
import * as movieService from './movie-browser.service';

export const keys = {
  GET_NOW_PLAYING: 'GET_NOW_PLAYING',
  GET_GENRE_LIST: 'GET_GENRE_LIST',
  FILTER_BY_GENRE: 'FILTER_BY_GENRE',
  FILTER_BY_RATING: 'FILTER_BY_RATING'
};

export const getNowPlayingMovies = pageNo =>
  createAsyncActionCreator(
    // actionType
    keys.GET_NOW_PLAYING,
    // requestFn
    movieService.getNowPlayingMovies,
    // requestParams
    { page: pageNo }
  );

export const getGenresList = () =>
  createAsyncActionCreator(
    // actionType
    keys.GET_GENRE_LIST,
    // requestFn
    movieService.getGenresList,
    // requestParams
    {}
  );

export const filterByGenres = selectedGenres => {
  return {
    type: keys.FILTER_BY_GENRE,
    selectedGenres
  };
};

export const filterByRating = selectedRating => {
  return {
    type: keys.FILTER_BY_RATING,
    selectedRating
  };
};
