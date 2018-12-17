import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../movie-browser/header/header.component';
import * as movieActions from './movie-browser.actions';
import * as movieHelpers from './movie-browser.helpers';
import MovieList from './movie-list/movie-list.component';
import * as scrollHelpers from '../common/scroll.helpers';
import GenreFilterComponent from './genre-filter/genre-filter.component';
import RatingFilterComponent from './rating-filter/rating-filter.component';
import './movie-browser.container.scss';

class MovieBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      currentMovies: []
    };
    // Binds the handleScroll to this class (MovieBrowser)
    // which provides access to MovieBrowser's props
    // Note: You don't have to do this if you call a method
    // directly from a lifecycle method
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.props.getGenresList();
    this.props.getNowPlayingMovies(this.state.currentPage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { nowPlaying } = this.props;
    if (!nowPlaying.isLoading) {
      let percentageScrolled = scrollHelpers.getPercentageScrolledDown(window);
      if (percentageScrolled > 0.8) {
        const nextPage = this.state.currentPage + 1;
        this.props.getNowPlayingMovies(nextPage);
        this.setState({ currentPage: nextPage });
      }
    }
  }

  render() {
    const { nowPlaying, genreList } = this.props;

    const movies = movieHelpers.getMoviesList(nowPlaying.response);
    const genresData = movieHelpers.getGenresList(genreList.response);

    return (
      <div>
        <Header title="My Movie Browser" />
        <Grid>
          <Row>
            <Grid>
              <Row>
                <Col md={10} className="filterPanels">
                  <GenreFilterComponent genres={genresData} />
                </Col>
                <Col md={2} className="filterPanels">
                  <RatingFilterComponent genres={genresData} />
                </Col>
              </Row>
            </Grid>
          </Row>
          <Row>
            <MovieList movies={movies} isLoading={nowPlaying.isLoading} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  // Map nodes in our state to a properties of our component
  state => ({
    nowPlaying: state.movieBrowser.nowPlaying,
    genreList: state.movieBrowser.genreList
  }),
  // Map action creators to properties of our component
  { ...movieActions }
)(MovieBrowser);
