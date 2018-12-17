import React from 'react';
import * as testSetup from './test-setup';
import { shallow } from 'enzyme';
import GenreListComponent from '../genre-list/genre-list.component';

testSetup.configureAdapter();

describe('Genre List Component Tests', () => {
  const genreList = {
    response: [
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
    ]
  };
  let initialState = {
    movieBrowser: {
      genreList: genreList
    }
  };
  it('renders without crashing when genre list is empty', () => {
    const wrapper = shallow(<GenreListComponent />);
    expect(wrapper.instance()).not.toBeNull();
  });
  it('renders multiple genres when list of genre is provided', () => {
    const genres = [28, 12];
    const wrapper = shallow(
      <GenreListComponent genres={genres} genreList={genreList} />
    );
    wrapper.setState(initialState);
    expect(wrapper.find('.chipsList')).toBeTruthy();
  });
});
