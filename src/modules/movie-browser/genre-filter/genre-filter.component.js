import React from 'react';
import { connect } from 'react-redux';
import * as movieActions from '../movie-browser.actions';
import './genre-filter.scss';

class GenreFilterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map()
    };
  }

  toggleCheckboxChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(
      prevState => ({
        checkedItems: prevState.checkedItems.set(item, isChecked)
      }),
      () => {
        let onlySelectedGenres = new Map(
          [...this.state.checkedItems].filter(([k, v]) => v === true)
        );
        this.props.filterByGenres(onlySelectedGenres);
      }
    );
  };
  render() {
    const { genres } = this.props;
    const { isChecked } = this.state;
    const genreColumns = genres
      ? genres.map(genre => (
          <div key={genre.id} className="genreCheckbox">
            <input
              type="checkbox"
              value={genre.id}
              name={genre.id}
              checked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
            <label key={genre}>{genre.name}</label>
          </div>
        ))
      : null;

    return (
      <div className="genreFilter">
        <div>Filter by Genres</div>
        <div className="filterList">{genreColumns}</div>
      </div>
    );
  }
}

export default connect(
  // Map nodes in our state to a properties of our component
  state => ({}),
  // Map action creators to properties of our component
  { ...movieActions }
)(GenreFilterComponent);
