import React from 'react';
import * as testSetup from './test-setup';
import { shallow } from 'enzyme';
import GenreComponent from '../genre-list/genre.component';

testSetup.configureAdapter();

describe('Genre Component Tests', () => {
  it('renders nothing without crashing when genre name not set', () => {
    const wrapper = shallow(<GenreComponent />);
    expect(wrapper.instance()).toBeNull();
  });
  it('renders genre name when genre Name is set', () => {
    const expectedGenreName = 'action';
    const wrapper = shallow(<GenreComponent genreName={expectedGenreName} />);
    expect(wrapper.find('.badge').text()).toEqual(expectedGenreName);
  });
});
