import React from 'react';
import { connect } from 'react-redux';
import * as movieActions from '../movie-browser.actions';
import './rating-filter.scss';

class RatingFilterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRating: 3
    };
  }

  change = e => {
    const value = e.target.value;
    this.setState(
      prevState => ({
        selectedRating: value
      }),
      () => {
        this.props.filterByRating(this.state.selectedRating);
      }
    );
  };
  render() {
    const generateFilter = (
      <select onChange={this.change} value={this.state.selectedRating}>
        <option value="-1">Select</option>
        <option value="10">10</option>
        <option value="9.5">9.5</option>
        <option value="9">9</option>
        <option value="8.5">8.5</option>
        <option value="8">8</option>
        <option value="7.5">7.5</option>
        <option value="7">7</option>
        <option value="6.5">6.5</option>
        <option value="6">6</option>
        <option value="5.5">5.5</option>
        <option value="5">5</option>
        <option value="4.5">4.5</option>
        <option value="4">4</option>
        <option value="3.5">3.5</option>
        <option value="3">3</option>
        <option value="2.5">2.5</option>
        <option value="2">2</option>
        <option value="1.5">1.5</option>
        <option value="1">1</option>
      </select>
    );

    return (
      <div className="ratingFilter">
        <div>Filter by Rating</div>
        <div className="filterList">{generateFilter}</div>
      </div>
    );
  }
}

export default connect(
  // Map nodes in our state to a properties of our component
  state => ({}),
  // Map action creators to properties of our component
  { ...movieActions }
)(RatingFilterComponent);
