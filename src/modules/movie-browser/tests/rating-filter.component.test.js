import React from 'react';
import { shallow, mount } from 'enzyme';
import RatingFilterComponent from '../rating-filter/rating-filter.component';
import * as testSetup from './test-setup';

testSetup.configureAdapter();

describe('Rating Filter Component Tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<RatingFilterComponent />);
    expect(wrapper.instance()).not.toBeNull();
  });
});
