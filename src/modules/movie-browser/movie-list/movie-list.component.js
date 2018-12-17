import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from '../movie-card/movie-card.component';
import LoaderComponent from '../../common/loader.component';
import * as movieHelpers from '../../movie-browser/movie-browser.helpers';
import { connect } from 'react-redux';

const styles = {
  movieColumn: {
    marginBottom: 20,
    marginTop: 20
  },
  movieListRow: {
    marginLeft: 2,
    marginRight: 2
  }
};

class MovieListComponent extends React.Component {
  render() {
    const { movies, isLoading, genreFilters, selectedRating } = this.props;
    const sortedMovies = movies ? movieHelpers.sortbyPopularity(movies) : [];
    const filteredByGenreMovies = movieHelpers.filterByGenres(
      sortedMovies,
      genreFilters.selectedGenres
    );
    const filteredMovies = movieHelpers.filterByRating(
      filteredByGenreMovies,
      selectedRating
    );
    const movieColumns = filteredMovies
      ? filteredMovies.map(movie => (
          <Col
            style={styles.movieColumn}
            key={movie.id}
            xs={12}
            sm={4}
            md={3}
            lg={3}
          >
            <MovieCard movie={movie} />
          </Col>
        ))
      : null;

    return (
      <Row style={styles.movieListRow}>
        {movieColumns}
        <LoaderComponent isLoading={isLoading} />
      </Row>
    );
  }
}
export default connect(
  // Map nodes in our state to a properties of our component
  state => {
    return {
      genreFilters: state.movieBrowser.genreFilters,
      selectedRating: state.movieBrowser.ratingFilter.selectedRating
    };
  },
  // Map action creators to properties of our component
  {}
)(MovieListComponent);
