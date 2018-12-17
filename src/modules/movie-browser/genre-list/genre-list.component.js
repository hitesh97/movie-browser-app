import React from 'react';
import * as movieHelpers from '../movie-browser.helpers';
import { connect } from 'react-redux';
import './genre-list.scss';
import GenreComponent from './genre.component';

const GenreListComponent = ({ genres, genreList }) => {
  const genresData = movieHelpers.getGenresList(genreList.response);
  const genreColumns = genres
    ? genres.map(genreId => (
        <GenreComponent
          key={genreId}
          genreName={movieHelpers.getGenreName(genresData, genreId)}
        />
      ))
    : null;

  return <div className="chipsList">{genreColumns}</div>;
};

export default connect(
  // Map nodes in our state to a properties of our component
  state => ({
    genreList: state.movieBrowser.genreList
  }),
  // Map action creators to properties of our component
  {}
)(GenreListComponent);
