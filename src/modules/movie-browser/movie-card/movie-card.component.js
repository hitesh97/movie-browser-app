import React from 'react';
import GenreListComponent from '../genre-list/genre-list.component';
import './movie-card.scss';

class MovieCardComponent extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      movie && (
        <div>
          <div className="card">
            <img
              src={movie.poster_path}
              alt={movie.title}
              className="posterImg"
            />
          </div>
          <div className="titleText">{movie.title}</div>
          <div>
            <GenreListComponent genres={movie.genre_ids} />
          </div>
        </div>
      )
    );
  }
}

export default MovieCardComponent;
