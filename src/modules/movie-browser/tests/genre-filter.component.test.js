import React from 'react';
import * as testSetup from './test-setup';
import { shallow } from 'enzyme';
import GenreFilterComponent from '../genre-filter/genre-filter.component';

testSetup.configureAdapter();

describe('Genre Filter Component Tests', () => {
  it('renders without crashing when genres are not set', () => {
    const wrapper = shallow(<GenreFilterComponent />);
    expect(wrapper.instance()).not.toBeNull();
  });
});
